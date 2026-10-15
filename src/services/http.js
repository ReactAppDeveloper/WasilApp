import axios from 'axios';
import { MMKV } from 'react-native-mmkv';

export const MINUTE = 60 * 1000;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

const disk = new MMKV({ id: 'http-cache' });
const memory = new Map();
const inflight = new Map();

const keyOf = (url, params) =>
  params ? `${url}?${Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join('&')}` : url;

const read = (key) => {
  if (memory.has(key)) return memory.get(key);
  try {
    const raw = disk.getString(key);
    if (raw) {
      const entry = JSON.parse(raw);
      memory.set(key, entry);
      return entry;
    }
  } catch (e) {
    // corrupt entry: treat as a miss
  }
  return null;
};

// Drop-in for axios.get that caches responses in memory and on disk (MMKV).
// - A fresh cached response comes back immediately, with no network request, so revisiting a screen is instant.
// - A stale or missing one is fetched; if that request fails, the stale copy is returned (works offline).
// - Identical concurrent requests share one network call.
// Resolves to { data } like axios. Pass { force: true } (e.g. pull-to-refresh) to skip a fresh cache.
export const cachedGet = (url, config, { ttl = HOUR, force = false } = {}) => {
  const key = keyOf(url, config?.params);
  const cached = read(key);
  if (cached && !force && Date.now() - cached.t < ttl) return Promise.resolve({ data: cached.d });
  if (inflight.has(key)) return inflight.get(key);
  const request = axios
    .get(url, config)
    .then(({ data }) => {
      const entry = { t: Date.now(), d: data };
      memory.set(key, entry);
      try {
        disk.set(key, JSON.stringify(entry));
      } catch (e) {
        // disk full or value too large: the memory copy still works for this session
      }
      return { data };
    })
    .catch((error) => {
      if (cached) return { data: cached.d };
      throw error;
    })
    .finally(() => inflight.delete(key));
  inflight.set(key, request);
  return request;
};
