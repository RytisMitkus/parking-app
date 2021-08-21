import express from 'express'

const app = express()

const PORT = 3000

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
