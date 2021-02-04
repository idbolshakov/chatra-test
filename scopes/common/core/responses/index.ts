import { TGetResponseFacade } from './index.types';

export const INTERNAL_SERVER_ERROR = 'internalServerError';

export const USERS_QUERY_VALIDATE_ERROR = 'usersQueryValidateError';
export const USERS_QUERY_PARSE_ERROR = 'usersQueryParseError';
export const MATCH_STEAM_ID_ERROR = 'matchSteamIdError';
export const GET_USER_GAMES_ERROR = 'getUserGamesError';
export const COMMON_GAMES_RESPONSE = 'commonGamesResponse';

export const GAME_ID_QUERY_VALIDATE_ERROR = 'gameIdQueryValidateError';
export const GET_MULTIPLAYER_GAME_INFO_ERROR = 'getMultiplayerGameInfoError';
export const MULTIPLAYER_GAME_INFO_RESPONSE = 'multiplayerGameInfoResponse';

export const getResponse = ({ key, data }: TGetResponseFacade) => {
  if (key === INTERNAL_SERVER_ERROR) return {
    status: 500,
    data: { message: 'Internal server error', ...data }
  };

  if (key === USERS_QUERY_VALIDATE_ERROR) return {
    status: 400,
    data: { message: 'Users query validate error. Please specify users query as string', ...data }
  };

  if (key === USERS_QUERY_PARSE_ERROR) return {
    status: 400,
    data: { message: 'Users array parse error. Please specify users array as array of strings', ...data }
  };

  if (key === MATCH_STEAM_ID_ERROR) return {
    status: 400,
    data: { message: 'Match steam id error. Please try again later', ...data }
  }

  if (key === GET_USER_GAMES_ERROR) return {
    status: 500,
    data: { message: 'Get steam user games error. Please try again later', ...data }
  }

  if (key === COMMON_GAMES_RESPONSE) return {
    status: 200,
    data
  }

  if (key === GAME_ID_QUERY_VALIDATE_ERROR) return {
    status: 400,
    data: { message: 'Game id query validate error. Please specify gameId query as string', ...data }
  };

  if (key === GET_MULTIPLAYER_GAME_INFO_ERROR) return {
    status: 500,
    data: { message: 'Get steam multiplyaer game info error', ...data }
  };

  if (key === MULTIPLAYER_GAME_INFO_RESPONSE) return {
    status: 200,
    data
  }

  throw Error();
};
