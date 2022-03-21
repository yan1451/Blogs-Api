require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const UserRouter = require('./routers/UserRouter');
const LoginRouter = require('./routers/LoginRouter');
const emailValidator = require('./middlewares/emailValidator');
const DisplayNameSize = require('./middlewares/DisplayNameSize');
const passwordMiddlewares = require('./middlewares/passwordMiddlewares');

const app = express();

app.use(bodyParser.json());
app.use(emailValidator, passwordMiddlewares);
app.use('/login', LoginRouter);
app.use(DisplayNameSize);
app.use('/user', UserRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
