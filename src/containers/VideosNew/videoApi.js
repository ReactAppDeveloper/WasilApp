import { cachedGet, HOUR } from '../../services/http';

const BASE = 'https://islamicapp.vercel.app/api';

// Lists from this API must be arrays; anything else becomes an empty list.
const list = async (url, config) => {
  const { data } = await cachedGet(url, config, { ttl: 6 * HOUR });
  return Array.isArray(data) ? data : [];
};

export const fetchChannels = () => list(`${BASE}/videochannels`);
export const fetchSpeakers = () => list(`${BASE}/speakers`);
export const fetchByChannel = async (channel) =>
  list(`${BASE}/videobychannel`, { params: { videochannelname: channel } });
export const fetchBySpeaker = (speakerId) => list(`${BASE}/videos`, { params: { speakerId } });

// Last path segment of a YouTube share/embed link.
export const youtubeId = (link = '') => link.split('?')[0].split('/').filter(Boolean).pop() || '';

// Where a channel chip should take the user. Some channels use a different listing or query name.
export const channelRoute = (channelName) => {
  if (channelName === 'Durs and Podcast') return ['BySpeakersNew'];
  if (channelName === 'Recitation Videos') return ['RecitaionDetailNew', { channelname: 'Recitation', name: channelName }];
  if (channelName === 'Kids Videos') return ['ChannelsDetailNew', { channelname: 'Kids', name: channelName }];
  return ['ChannelsDetailNew', { channelname: channelName, name: channelName }];
};
