import { NextFunction, Request, Response } from 'express';
import { get, controller, use, bodyValidator, post } from './decorators';

// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log('Hello from the middleware');
//   next();
// }

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class UserController {
  // @get('/')
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get('/login')
  // @use(logger)
  getLogin(req: Request, res: Response): void {
    // res.send('Hello there ');
    res.send(`
      <form method='POST'>
        <div>
          <label>Email</label>
          <input name = "email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'onigiri') {
      //   mark this person as logged in
      req.session = { loggedIn: true };
      //redirect to home
      res.redirect('/');
    } else {
      res.status(401).send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
