import parseGameIdQuery from './parseGameIdQuery';
import fetchMultiplayerGameInfo from './fetchMultiplayerGameInfo';
import { getResponse } from 'common/core/responses';
import { TFetchData } from 'common/core/types';


export type TGetMultiplayerGameInfoFacade = {
  gameId: unknown;
  fetchData: TFetchData;
  getResponse: typeof getResponse;
  parseGameIdQuery: typeof parseGameIdQuery;
  fetchMultiplayerGameInfo: typeof fetchMultiplayerGameInfo;
};

export type TGetMultiplayerGameInfoFactoryFacade = Pick<TGetMultiplayerGameInfoFacade, 'fetchData'>;
