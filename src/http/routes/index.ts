import { Router } from 'express';

import usersRouter from './users.router';


class RouterV1 {

  public getRouter(): Router {
    const apiRouter = Router();

    apiRouter.use('/user', usersRouter);

    return apiRouter;
  }
}

export default RouterV1;
