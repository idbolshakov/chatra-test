import express from 'express';

export type TInitExpressFacade = {
  server: express.Application;
  middlewares: express.RequestHandler[];
  routes: TRoute[];
  port: number;
};

export type TRoute = {
  method: 'get' | 'post' | 'put' | 'delete',
  url: string;
  handler: (req: express.Request, res: express.Response) => void
}
