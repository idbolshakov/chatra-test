import { USERS_QUERY_VALIDATE_ERROR, USERS_QUERY_PARSE_ERROR } from 'common/core/responses';

import { TParseUsersQueryResult } from './index.types';

const parseUsersQuery = (users: unknown): TParseUsersQueryResult => {
  if (!users || typeof users !== 'string') return [{ key: USERS_QUERY_VALIDATE_ERROR }, null];

  const usersList: string[] = [];
  try {
    const parsedUsers = JSON.parse(users);
    parsedUsers.forEach((user: unknown) => {
      if (typeof user !== 'string') throw Error();

      usersList.push(user);
    });
  } catch {
    return [{key: USERS_QUERY_PARSE_ERROR}, null];
  };

  return [null, usersList];
}

export default parseUsersQuery;
