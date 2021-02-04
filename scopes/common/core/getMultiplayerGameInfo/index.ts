import getMultiplayerGameInfo from './getMultiplayerGameInfo';
import parseGameIdQuery from './parseGameIdQuery';
import fetchMultiplayerGameInfo from './fetchMultiplayerGameInfo';
import { getResponse } from 'common/core/responses';

import { TGetMultiplayerGameInfoFactoryFacade } from './getMultiplayerGameInfo.types';

export default ({ fetchData }: TGetMultiplayerGameInfoFactoryFacade) =>
  (gameId: unknown) => getMultiplayerGameInfo({
    fetchData,
    gameId,
    getResponse,
    parseGameIdQuery,
    fetchMultiplayerGameInfo,
  });
