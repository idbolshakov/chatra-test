import sendApiRequest from 'utils/sendApiRequest';
import fetchData from './fetchData';

import { TFetchDataFacade } from './fetchData.types';

const CACHE_TIME = 3000;

export default ({ redis }: Pick<TFetchDataFacade, 'redis'>) =>
  ({ url, cacheKey }: Pick<TFetchDataFacade, 'url' | 'cacheKey'>) =>
    fetchData({url, cacheKey, redis, sendApiRequest, cacheTime: CACHE_TIME});
