import { TFetchData } from 'common/core/types';

export type TFetchMultiplayerGameInfoFacade = {
  gameId: string;
  fetchData: TFetchData;
}

export type TFetchMultiplayerGameInfoResult = [null, unknown] | [{key: string, data?: any}, null];

export type TFetchMultiplayerGameInfoApiResponse = {
  json: {
    [gameId: string]: {
      data?: {
        categories?: {
          id?: number;
        }[]
      }
    }
  }
};

