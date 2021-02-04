import express from 'express';
import initExpress from './initExpress';

import { TInitExpressFacade, TRoute } from './initExpress.types';

export default (factoryFacade: Omit<TInitExpressFacade, 'server'>) => initExpress({
  server: express(),
  ...factoryFacade
});
