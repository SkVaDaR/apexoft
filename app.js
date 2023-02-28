const express = require('express');

const { userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

app.listen(5432, () => {
  console.log('app listen 5432');
});
