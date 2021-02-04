import { TFetchData } from 'common/core/types';

export type TGetSteamIdFacade = {
  steamApiKey: string;
  userName: string;
  fetchData: TFetchData;
}

export type TGetSteamIdResult = [null, string] | [{key: string, data?: any}, null];

export type TSteamIdApiResponse = {
  json: {
    response?: {
      steamid?: string
    }
  }
};

