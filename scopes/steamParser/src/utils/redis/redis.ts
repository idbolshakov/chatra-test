import { TInitRedisFacade, TInitializedRedis } from './redis.types';

export default(facade: TInitRedisFacade): TInitializedRedis => {
  const client = facade.createClient({ url: facade.url });

  client.on('error', error => console.log('redis error: ', error));

  return {
    setex: facade.promisify(client.setex).bind(client),
    get: facade.promisify(client.get).bind(client)
  }
};
