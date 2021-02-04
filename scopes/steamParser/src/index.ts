import morgan from 'morgan';
import cors from 'cors';

import runtimeConfig from './runtimeConfig';

import createRedis from 'utils/redis';
import createFetchData from 'utils/fetchData';
import createDB from 'utils/createDB';
import initExpress from 'utils/initExpress';

import createGetCommonGames from 'common/core/getCommonGames';
import createGetMultiplayerGameInfo from 'common/core/getMultiplayerGameInfo';

(async () => {
  const redis = createRedis('//redis:6379');
  const fetchData = createFetchData({ redis });

  const getCommonGames = createGetCommonGames({
    steamApiKey: runtimeConfig.steamApiKey,
    fetchData,
    createDB
  });
  const getMultiplayerGameInfo = createGetMultiplayerGameInfo({ fetchData });

  initExpress({
    port: Number(process.env['PORT']),
    middlewares: [cors(), morgan('combined')],
    routes: [
      {
        method: 'get',
        url: '/api/v1/common-games',
        handler: async (req, res) => {
          const {status, data} = await getCommonGames(req.query.users);

          res.status(status).json(data);
        }
      },
      {
        method: 'get',
        url: '/api/v1/multiplayer-game-info',
        handler: async (req, res) => {
          const {status, data} = await getMultiplayerGameInfo(req.query.gameId);

          res.status(status).json(data);
        }
      }
    ]
  });
})();
