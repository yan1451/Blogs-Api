require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const UserRouter = require('./routers/UserRouter');
const LoginRouter = require('./routers/LoginRouter');
const postRouter = require('./routers/postRouter');
const CategoriesRouter = require('./routers/CategoriesRouter');

const app = express();

app.use(bodyParser.json());

app.use('/login', LoginRouter);
app.use('/user', UserRouter);
app.use('/categories', CategoriesRouter);
app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
