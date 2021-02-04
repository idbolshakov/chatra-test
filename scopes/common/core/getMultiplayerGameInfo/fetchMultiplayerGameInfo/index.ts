import { GET_MULTIPLAYER_GAME_INFO_ERROR } from 'common/core/responses';
import {
  TFetchMultiplayerGameInfoFacade, TFetchMultiplayerGameInfoResult, TFetchMultiplayerGameInfoApiResponse
} from './index.types';

const fetchMultiplayerGameInfo =
  async (facade: TFetchMultiplayerGameInfoFacade): Promise<TFetchMultiplayerGameInfoResult> => {
    const { gameId, fetchData } = facade;
    const url = `https://store.steampowered.com/api/appdetails/?appids=${gameId}`;
    const cacheKey = `game-info-${gameId}`;

    const [gameInfoError, gameInfo] = await fetchData({ url, cacheKey });
    if (gameInfoError) return [{ key: GET_MULTIPLAYER_GAME_INFO_ERROR, data: {error: gameInfoError, gameId}}, null];

    return [null, gameInfo];
  };

export default fetchMultiplayerGameInfo;
