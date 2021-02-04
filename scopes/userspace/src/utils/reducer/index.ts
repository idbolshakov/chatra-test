import { v4 as uuidv4 } from 'uuid';
import { TAppState, TAction } from './index.types';

export const ADD_NEW_STEAM_PROFILE_INPUT = 'addNewSteamProfileInput';
export const SET_COMMON_GAMES = 'setCommonGames';

export const initialState: TAppState = {
  steamProfileInputs: [],
  commonGames: {
    list: [],
    userset: ''
  }
};

export function reducer(prevState: TAppState, action: TAction) {
  switch (action.type) {
    case ADD_NEW_STEAM_PROFILE_INPUT:
      return {
        ...prevState,
        steamProfileInputs: [
          ...prevState.steamProfileInputs,
          { id: uuidv4(), ...action.payload }
        ]
      }
    case SET_COMMON_GAMES:
      return {
        ...prevState,
        commonGames: action.payload
      }

    default:
      throw new Error();
  }
};
