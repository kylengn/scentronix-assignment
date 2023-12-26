import express from 'express'
import { findServer } from '../services/findServer'
import { Server } from '../types/server'

const router = express.Router()

router.get('/findServer', async (req, res) => {
  const servers: Server[] = [
    {
      url: 'https://does-not-work.perfume.new',
      priority: 1
    },
    {
      url: 'https://gitlab.com',
      priority: 4
    },
    {
      url: 'http://app.scnt.me',
      priority: 3
    },
    {
      url: 'https://offline.scentronix.com',
      priority: 2
    }
  ]

  try {
    const server = await findServer(servers)
    res.json(server)
  } catch (error) {
    res.status(500).send('No servers are online.')
  }
})

export default router
