const express = require('express');
const routerApi = require('../routes');
const app = express();
const port = process.env.PORT || 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('../middlewares/error.handler');
const cors = require('cors');

app.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed!'));
    }
  }
}
app.use(cors());
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {

});
