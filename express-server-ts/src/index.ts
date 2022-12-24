import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/UserController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));
app.use(cookieSession({ keys: ['wano-kuni'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => console.log(`Listening on port 3000...`));
