import { TFetchDataFacade, TFetchDataResponse } from './fetchData.types';

const fetchData = async (facade: TFetchDataFacade): TFetchDataResponse => {
  const {url, cacheKey, cacheTime, redis, sendApiRequest} = facade;

  const cachedValue = await redis.get(cacheKey);
  if (cachedValue) return [null, JSON.parse(cachedValue)];

  const response = await sendApiRequest(url);
  if (response.status !== 200) return [ JSON.stringify(response), null ]

  redis.setex(cacheKey, cacheTime, JSON.stringify(response));
  return [null, response];
};

export default fetchData;
