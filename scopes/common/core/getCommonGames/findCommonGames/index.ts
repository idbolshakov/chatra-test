import { TFindCommonGamesFacade } from './index.types';

export default async ({ createDB, gamesData, usersCount }: TFindCommonGamesFacade) => {
  const db = await createDB();
  await db.run("CREATE TABLE games (gameId TEXT, steamId TEXT)");
  var stmt = await db.prepare("INSERT INTO games (gameId, steamId) VALUES (?, ?)");

  for (const game of gamesData) {
    await stmt.run([game.appid, game.steamId]);
  }
  await stmt.finalize();

  const res = await db.all(`SELECT gameId FROM games GROUP BY gameId HAVING Count(steamId) = ${usersCount}`);
  await db.close();

  return res;
};
