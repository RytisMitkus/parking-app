import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
