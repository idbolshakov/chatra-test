import { INTERNAL_SERVER_ERROR, MULTIPLAYER_GAME_INFO_RESPONSE } from 'common/core/responses';
import { TFetchMultiplayerGameInfoApiResponse } from './fetchMultiplayerGameInfo/index.types';
import { TGetMultiplayerGameInfoFacade } from './getMultiplayerGameInfo.types';

export const MULTIPLAYER_ID = 1;

export default async (facade: TGetMultiplayerGameInfoFacade) => {
  const { gameId, fetchData, getResponse, parseGameIdQuery, fetchMultiplayerGameInfo } = facade;

  try {
    const [parseGameIdQueryError, parsedGameId] = parseGameIdQuery(gameId);
    if (parseGameIdQueryError) return getResponse(parseGameIdQueryError);
    if (!parsedGameId) throw Error();

    const [gameInfoError, gameInfo] = await fetchMultiplayerGameInfo({ fetchData, gameId: parsedGameId });
    if (gameInfoError) return getResponse(gameInfoError);
    if (!gameInfo) throw Error();

    const isMultiplayer = !!((<TFetchMultiplayerGameInfoApiResponse>gameInfo)
      .json[parsedGameId].data?.categories?.find(({ id }) => id === MULTIPLAYER_ID));

    const responseData = isMultiplayer ?  { isMultiplayer, gameInfo } : { isMultiplayer };

    return getResponse({ key: MULTIPLAYER_GAME_INFO_RESPONSE, data: responseData });

  } catch (error) {
    return getResponse({ key: INTERNAL_SERVER_ERROR, data: error });
  }
}

