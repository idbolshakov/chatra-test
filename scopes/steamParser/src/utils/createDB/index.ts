import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import createDB from './createDB';

export default () => createDB({ create: open, driver: sqlite3.Database });
