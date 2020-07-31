import { config as envConfig } from "dotenv";
envConfig();
import * as env from './lib/env';
env.checkEnv();

import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { resolve } from 'path';
import { initSwaggerMiddlware } from './middlewares/swagger';
import { inOutLogger } from './lib/log';
import * as cls from './lib/cls';
import { getCorsOptions } from './lib/cors';
import genSpec from './spec/openApiSpec';


const app = express();
app.use(cors(getCorsOptions()));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cls.setRequestId);
app.use(inOutLogger);

export default app;

genSpec().then(() => {
  initSwaggerMiddlware(app, resolve(__dirname), () => {
    app.use(function (err: Error, req: express.Request, res: express.Response, next) {
      if (err) {
        const errStr = err.message || err.toString();
        const errMsg = { message: errStr, extra: err };
        if (res.statusCode < 400) {
          res.status(500);
        }
        res.json(errMsg);
      }
    });
  });
});
