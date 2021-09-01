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

app.get('/test', (req, res) => {
  res.json({
    message: 'testuxsaz',
  })
})

app.use('/api/auth/', authRouter)

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
