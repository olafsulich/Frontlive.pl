import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Adres email jest wymagany' });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID as string;
    const API_KEY = process.env.MAILCHIMP_API_KEY as string;
    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `Wystąpił błąd podczas subskrybowania do newslettera. Napisz mi maila na adres [olafsulich@gmail.com], żebym Cię dodał :)`,
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
