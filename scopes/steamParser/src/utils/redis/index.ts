import { createClient } from 'redis';
import { promisify } from 'util';
import redis from './redis';

export default (url: string) => redis({
  url,
  createClient,
  promisify
});

