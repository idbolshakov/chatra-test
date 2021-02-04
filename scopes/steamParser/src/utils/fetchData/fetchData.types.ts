import sendApiRequest from 'utils/sendApiRequest';

import { TInitializedRedis } from 'utils/redis/redis.types';

export type TFetchDataFacade = {
  url: string;
  cacheKey: string;
  cacheTime: number;
  redis: TInitializedRedis;
  sendApiRequest: typeof sendApiRequest;
}

export type TFetchDataResponse = Promise<[
  null | string,
  unknown
]>;
