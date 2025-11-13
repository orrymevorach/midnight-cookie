export const sendContactFormSubmission = async ({ fields, subject, title }) => {
  const res = await fetch('/api/mailgun/send-contact-form-submission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields, subject, title }),
  })
    .then(res => res.json())
    .catch(err => {
      console.error('Error sending contact form submission:', err);
      return { error: 'Error sending contact form submission' };
    });
  return res;
};
