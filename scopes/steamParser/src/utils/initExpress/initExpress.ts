import { TInitExpressFacade } from './initExpress.types';

export default (facade: TInitExpressFacade) => {
  const { server, middlewares, routes, port } = facade;

  middlewares.forEach(middleware => server.use(middleware));
  routes.forEach(route => server[route.method](route.url, route.handler));

  server.listen(port);
};
