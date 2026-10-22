import { cachedGet, HOUR } from '../../services/http';

const BASE = 'https://islamicapp.vercel.app/api';
// Lists from this API must be arrays; anything else (error object, HTML page) becomes an empty list.
const get = async (path, params) => {
  const { data } = await cachedGet(`${BASE}/${path}`, { params }, { ttl: 6 * HOUR });
  return Array.isArray(data) ? data : [];
};

export const fetchAllStories = () => get('allislamicstory');
export const fetchCategories = () => get('islamiccategories');
export const fetchStoriesByCategory = (categoryId) => get('islsubcategories', { categoryId });
export const fetchStoryLibrary = () => get('allislsubcategory');
export const fetchStory = async (storyId) => (await get('islamicstorybystoryid', { storyId }))[0] || null;
export const fetchStoryAudios = (storyId) => get('islamicstoryaudiosbystoryid', { storyId });

// The API stores flags as the strings "true"/"false".
export const isFlag = (value) => value === true || value === 'true';

// Stories from the home feed carry `storyId`; library/category items use their own `_id`.
export const storyIdOf = (item) => item.storyId || item._id;
