import { GET_USER_GAMES_ERROR } from 'common/core/responses';
import { TGetUserGamesFacade, TGetUserGamesResult, TSteamUserGamesApiResponse } from './index.types';

const getUserGames = async (facade: TGetUserGamesFacade): Promise<TGetUserGamesResult> => {
  const { steamApiKey, steamId, fetchData } = facade;
  const url =`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`;
  const cacheKey = `steam-id-${steamId}`;

  const [userGamesError, userGamesResponse] = await fetchData({ url, cacheKey });
  if (userGamesError) return [{ key: GET_USER_GAMES_ERROR, data: {error: userGamesError, steamId}}, null];

  const userGames = (userGamesResponse as TSteamUserGamesApiResponse).json.response?.games;

  return [
    null,
    (userGames || []).map(({appid}) => ({steamId, appid}))
  ];
}

export default getUserGames;
