import { TCreateDB } from 'common/core/getCommonGames/getCommonGames.types';

export type TFindCommonGamesFacade = {
  createDB: TCreateDB;
  gamesData: TGameData[];
  usersCount: number;
}

type TGameData = {
  appid: number;
  steamId: string;
}
