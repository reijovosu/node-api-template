import app from './application';
import log from './lib/log';
const serverPort = process.env.PORT || 8001;

app.listen(serverPort, () => {
  return log.info(`server is listening on ${serverPort}`);
});
