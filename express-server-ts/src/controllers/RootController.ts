import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

const requiredAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req?.session?.loggedIn) return next();

  res.status(403).send('<h1>Forbidden</h1>');
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req?.session?.loggedIn) {
      res.status(200).send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requiredAuth)
  getProtected(req: Request, res: Response) {
    res.send('<h1>Welcome to protected route!</h1>');
  }
}
