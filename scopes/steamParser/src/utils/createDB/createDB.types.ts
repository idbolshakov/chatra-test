import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export type TCreateDBFacade = {
  create: typeof open,
  driver: typeof sqlite3.Database
};
