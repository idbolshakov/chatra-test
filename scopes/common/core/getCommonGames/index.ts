import { getResponse } from 'common/core/responses';
import getSteamId from './getSteamId';
import getUserGames from './getUserGames';
import parseUsersQuery from './parseUsersQuery';
import findCommonGames from './findCommonGames';
import getCommonGames from './getCommonGames';
import { TGetCommonGamesFacade, TGetCommonGamesFactoryFacade } from './getCommonGames.types';

export default ({ fetchData, createDB, steamApiKey }: TGetCommonGamesFactoryFacade) =>
  (users: unknown) => getCommonGames({
    fetchData,
    users,
    steamApiKey,
    createDB,
    getSteamId,
    getUserGames,
    getResponse,
    parseUsersQuery,
    findCommonGames,
  });
