import { TFetchData } from 'common/core/types';

export type TGetUserGamesFacade = {
  steamApiKey: string;
  steamId: string;
  fetchData: TFetchData;
};

export type TGetUserGamesResult = [null, { appid: number, steamId: string }[]] | [{key: string, data?: any}, null];

export type TSteamUserGamesApiResponse = {
  json: {
    response?: {
      games?: {appid: number}[]
    }
  }
};
