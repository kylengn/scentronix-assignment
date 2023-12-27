import { findServer } from '../../src/services/findServer'
import { Server } from '../../src/types/server'

// Mock the global fetch
jest.mock('node-fetch', () => require('jest-fetch-mock'))

// Mock the global fetch response
const fetchMock = require('jest-fetch-mock')

describe('findServer function', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should find the server with the lowest priority that is online', async () => {
    const servers: Server[] = [
      { url: 'http://server1.com', priority: 1 },
      { url: 'http://server2.com', priority: 2 },
      { url: 'http://server3.com', priority: 3 }
    ]

    fetchMock
      .mockResponseOnce(JSON.stringify({}), { status: 500 }) // server1: offline
      .mockResponseOnce(JSON.stringify({}), { status: 200 }) // server2: online
      .mockResponseOnce(JSON.stringify({}), { status: 200 }) // server3: online

    const bestServer = await findServer(servers)

    expect(bestServer).toEqual(servers[1])
  })

  it('should throw an error if no servers are online', async () => {
    const servers: Server[] = [
      { url: 'http://server1.com', priority: 1 },
      { url: 'http://server2.com', priority: 2 }
    ]

    fetchMock
      .mockResponseOnce(JSON.stringify({}), { status: 500 }) // server1: offline
      .mockResponseOnce(JSON.stringify({}), { status: 500 }) // server2: offline

    await expect(findServer(servers)).rejects.toThrow('No servers are online.')
  })
})
