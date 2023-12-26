'use client'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Server {
  url: string
  priority: number
}

export default function Home() {
  const [server, setServer] = useState<Server | null>(null)

  useEffect(() => {
    const findServer = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/findServer')
        const data: Server = await res.json()
        setServer(data)
      } catch (error) {
        console.error('Failed to fetch server:', error)
      }
    }

    findServer()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 6
      }}
    >
      {server ? (
        <Box>
          <Typography>Server URL: {server.url}</Typography>
          <Typography>Server Priority: {server.priority}</Typography>
        </Box>
      ) : (
        <Typography>Loading server data...</Typography>
      )}
    </Box>
  )
}
