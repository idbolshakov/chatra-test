import { getResponse } from 'common/core/responses';
import getSteamId from './getSteamId';
import getUserGames from './getUserGames';
import parseUsersQuery from './parseUsersQuery';
import findCommonGames from './findCommonGames';

import { TFetchData } from 'common/core/types';

export type TGetCommonGamesFacade = {
  steamApiKey: string;
  users: unknown;
  fetchData: TFetchData;
  createDB: TCreateDB;
  getSteamId: typeof getSteamId;
  getUserGames: typeof getUserGames;
  getResponse: typeof getResponse;
  parseUsersQuery: typeof parseUsersQuery;
  findCommonGames: typeof findCommonGames;
}

export type TCreateDB = () => Promise<{
  run: (query: string) => Promise<unknown>;
  prepare: (query: string) => Promise<{
    run: (data: (string | number | undefined)[]) => Promise<unknown>;
    finalize: () => Promise<unknown>;
  }>;
  all: (query: string) => Promise<unknown[]>;
  close: () => Promise<unknown>;
}>;


export type TGetCommonGamesFactoryFacade = Pick<TGetCommonGamesFacade, 'fetchData' | 'steamApiKey' | 'createDB'>;

export type TGetCommonGamesResponse = {
  status: number;
  data: Record<string, any>
}


