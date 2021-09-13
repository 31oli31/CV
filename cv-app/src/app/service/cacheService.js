const QuickLRU = require('quick-lru');
const { format } = require('date-fns');

const CACHE = new QuickLRU({ maxSize: 1000 });

const setCache = async (key, value) => {
  await CACHE.set(key, value);
};

const setCacheByRepoName = async (repo, value) => {
  const cacheKey = repo + format(new Date(), 'dd-MM-yyyy');
  await setCache(cacheKey, value);
};

const getCache = (key) => {
  return CACHE.get(key);
};

const getCacheByRepoName = (repo) => {
  const cacheKey = repo + format(new Date(), 'dd-MM-yyyy');
  return getCache(cacheKey);
};

const values = () => CACHE.values();

const keys = () => {
  const allKeys = CACHE.keys();
  return [...allKeys];
};

const getCompleteCache = async () => {
  const allKeys = keys();
  const completeCache = await allKeys.map((key) => {
    return { [key]: getCache(key) };
  });
  return completeCache;
};

module.exports = {
  setCache,
  getCache,
  getCacheByRepoName,
  setCacheByRepoName,
  getCompleteCache,
  values,
  keys,
};
