import { GAME_ID_QUERY_VALIDATE_ERROR } from 'common/core/responses';

import { TParseGameIdQueryResult } from './index.types';

const parseGameIdQuery = (gameId: unknown): TParseGameIdQueryResult => {
  if (!gameId || typeof gameId !== 'string') return [{ key: GAME_ID_QUERY_VALIDATE_ERROR }, null];

  return [null, gameId];
}

export default parseGameIdQuery;
