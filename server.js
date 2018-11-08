import express from 'express';
import { config } from 'dotenv';
import middleware from './middleware';

config();
const app = express();
middleware(app, express);

app.listen(process.env.PORT, function () {
  console.log('Express server listening on port ' + process.env.PORT);
});

