import { MATCH_STEAM_ID_ERROR } from 'common/core/responses';
import { TGetSteamIdFacade, TGetSteamIdResult, TSteamIdApiResponse } from './index.types';

const getSteamId = async (facade: TGetSteamIdFacade): Promise<TGetSteamIdResult> => {
  const { steamApiKey, userName, fetchData } = facade;
  const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamApiKey}&vanityurl=${userName}`;
  const cacheKey = `steam-username-${userName}`;

  const [resolveSteamIdError, steamIdResponse] = await fetchData({ url, cacheKey });
  if (resolveSteamIdError) return [{ key: MATCH_STEAM_ID_ERROR, data: {error: resolveSteamIdError, userName}}, null];

  const steamId = (steamIdResponse as TSteamIdApiResponse).json.response?.steamid;
  if (!steamId) return [{ key: MATCH_STEAM_ID_ERROR, data: {response: steamIdResponse, userName}}, null];

  return [null, steamId];
};

export default getSteamId;
