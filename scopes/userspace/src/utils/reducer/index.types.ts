export type TAppState = {
  steamProfileInputs: {
    id: string;
    raw: string;
    userName: string;
  }[],
  commonGames: {
    list: {
      gameId: string
    }[],
    userset: string
  }
};

export type TAction = {
  type: string;
  payload?: any;
}
