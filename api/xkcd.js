import axios from 'axios'

/*
 * Due to the CORS policy, I'm unable to make direct requests from the client to the xkcd.com server.
 * I'm implementing a server-side proxy on Vercel to make requests to  xkcd.com.
 */

export default async (req, res) => {
  const { id } = req.query

  try {
    const { data } = await axios.get(`https://xkcd.com/${id}/info.0.json`)
    res.status(200).json(data)
  }
  catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
}
