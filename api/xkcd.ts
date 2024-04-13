import type { IncomingMessage, ServerResponse } from 'node:http'
import axios from 'axios'

/*
 * Due to the CORS policy, I'm unable to make direct requests from the client to the xkcd.com server.
 * I'm implementing a server-side proxy on Vercel to make requests to  xkcd.com.
 */

export default async (req: IncomingMessage & { query: { [key: string]: string } }, res: ServerResponse) => {
  const { id } = req.query

  try {
    const { data } = await axios.get(`https://xkcd.com/${id}/info.0.json`)
    res.statusCode = 200
    res.end(JSON.stringify(data))
  }
  catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({ error: 'Error fetching data' }))
  }
}
