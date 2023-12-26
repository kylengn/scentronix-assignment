import fetch from 'node-fetch'
import { Server } from '../types/server'

export const findServer = async (servers: Server[]): Promise<Server> => {
  const onlineServers: Promise<Server>[] = servers.map(server =>
    checkServer(server).then((isOnline: boolean) =>
      isOnline ? server : Promise.reject()
    )
  )

  const results = await Promise.allSettled(onlineServers)
  const fulfilledResults = results.filter(
    result => result.status === 'fulfilled'
  ) as PromiseFulfilledResult<Server>[]

  if (fulfilledResults.length === 0) {
    throw new Error('No servers are online.')
  }

  return fulfilledResults
    .map(result => result.value)
    .sort((a: Server, b: Server) => a.priority - b.priority)[0]
}

const checkServer = (server: Server): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const timeout = new Promise(resolve =>
      setTimeout(() => resolve(false), 5000)
    )
    const request = fetch(server.url, { method: 'HEAD' })
      .then(response => resolve(response.ok))
      .catch(() => resolve(false)) // Server is not online

    Promise.race([request, timeout]).then(result => resolve(result as boolean))
  })
}
