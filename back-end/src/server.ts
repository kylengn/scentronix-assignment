import express from 'express'
import serverRoutes from './routes/serverRoutes'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

app.use(
  cors({
    origin: '*'
  })
)

app.get('/', (req, res) => {
  res.send('Hello, world! This is the root of my backend.')
})

app.use('/api', serverRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
