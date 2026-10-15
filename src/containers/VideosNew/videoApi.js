import { cachedGet, HOUR } from '../../services/http';

const BASE = 'https://islamicapp.vercel.app/api';

export const fetchChannels = async () => (await cachedGet(`${BASE}/videochannels`, undefined, { ttl: 6 * HOUR })).data || [];
export const fetchSpeakers = async () => (await cachedGet(`${BASE}/speakers`, undefined, { ttl: 6 * HOUR })).data || [];
export const fetchByChannel = async (channel) =>
  (await cachedGet(`${BASE}/videobychannel`, { params: { videochannelname: channel } }, { ttl: 6 * HOUR })).data || [];
export const fetchBySpeaker = async (speakerId) => (await cachedGet(`${BASE}/videos`, { params: { speakerId } }, { ttl: 6 * HOUR })).data || [];

// Last path segment of a YouTube share/embed link.
export const youtubeId = (link = '') => link.split('?')[0].split('/').filter(Boolean).pop() || '';

// Where a channel chip should take the user. Some channels use a different listing or query name.
export const channelRoute = (channelName) => {
  if (channelName === 'Durs and Podcast') return ['BySpeakersNew'];
  if (channelName === 'Recitation Videos') return ['RecitaionDetailNew', { channelname: 'Recitation', name: channelName }];
  if (channelName === 'Kids Videos') return ['ChannelsDetailNew', { channelname: 'Kids', name: channelName }];
  return ['ChannelsDetailNew', { channelname: channelName, name: channelName }];
};
