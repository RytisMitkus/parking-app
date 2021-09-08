const express = require('express');
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const authRouter = require('./routes/AuthRouter')
const passport = require('passport');



const app = express()

const PORT = process.env.PORT || 3000

app.use(morgan('tiny'));
app.use(express.json());
app.use(passport.initialize());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/test', (req, res) => {
  res.json({
    message: 'testuxsaz',
    anotherMessage: 'another testukszas'
  })
})

app.use('/api/auth/', authRouter, function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
