const express = require('express');
const routerApi = require('../routes');
const app = express();
const port = 3005;

app.use(express.json());
routerApi(app);

app.listen(port, () => {

});
