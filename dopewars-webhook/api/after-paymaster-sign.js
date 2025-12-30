// This one is optional — just returns success
export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({});
  } else {
    res.status(405).end();
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};