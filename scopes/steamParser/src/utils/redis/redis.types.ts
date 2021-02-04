import { createClient } from 'redis';
import { promisify } from 'util';

export type TInitRedisFacade = {
  url: string;
  createClient: typeof createClient;
  promisify: typeof promisify;
};

export type TInitializedRedis = {
  setex: ( name: string, sec: number, value: string ) => Promise<string | null>
  get: ( name: string ) => Promise<string | null>
}
