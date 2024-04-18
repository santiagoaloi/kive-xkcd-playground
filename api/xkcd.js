import axios from 'axios'

/**
 * Server-side proxy to make requests to xkcd.com due to the CORS policy.
 * @param req - The request object, containing a query parameter with the ID of the comic to fetch.
 * @param res - The response object, used to send the data back to the client.
 * @returns A promise that resolves when the data has been sent back to the client.
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
