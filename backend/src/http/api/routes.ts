import { Router, Request, Response, NextFunction } from 'express';

import homePage from '../../modules/DadosBHTrans/api/dadosBHTrans'

const app: Router = Router();

app.use('/home', homePage)

export default app;