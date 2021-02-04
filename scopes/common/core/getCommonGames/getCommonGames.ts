import { INTERNAL_SERVER_ERROR, COMMON_GAMES_RESPONSE } from 'common/core/responses';
import {
  TGetCommonGamesFacade, TGetCommonGamesResponse
} from './getCommonGames.types';

export default async (facade: TGetCommonGamesFacade): Promise<TGetCommonGamesResponse> => {
  const {
    createDB, users, fetchData, steamApiKey, getSteamId, getUserGames, parseUsersQuery, getResponse, findCommonGames,
  } = facade;

  try {
    const [parseUsersQueryError, usersList] = parseUsersQuery(users);
    if (parseUsersQueryError) return getResponse(parseUsersQueryError);
    if (!usersList) throw Error();

    const gamesData = [];
    for (const userName of usersList) {
      const [steamIdError, steamId] = await getSteamId({ steamApiKey, userName, fetchData });
      if (steamIdError) return getResponse(steamIdError);
      if (!steamId) throw Error();

      const [userGamesError, userGames] = await getUserGames({ steamApiKey, steamId, fetchData });
      if (userGamesError) return getResponse(userGamesError);
      if (!userGames) throw Error();

      gamesData.push(...userGames);
    }

    const commonGames = await findCommonGames({
      createDB,
      gamesData,
      usersCount: usersList.length
    });

    return getResponse({ key: COMMON_GAMES_RESPONSE, data: { commonGames }});
  } catch (error) {
    return getResponse({ key: INTERNAL_SERVER_ERROR, data: error});
  }
};
