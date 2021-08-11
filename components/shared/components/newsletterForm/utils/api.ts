export const subscribeToNewsletter = async (email: string) => {
  return await fetch('/api/subscribe', {
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
};
