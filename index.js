require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const UserRouter = require('./routers/UserRouter');
const emailValidator = require('./middlewares/emailValidator');
const DisplayNameSize = require('./middlewares/DisplayNameSize');
const passwordMiddlewares = require('./middlewares/passwordMiddlewares');

const app = express();

app.use(bodyParser.json());

app.use(DisplayNameSize, emailValidator, passwordMiddlewares);
app.use('/user', UserRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
