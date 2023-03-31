


const mailSender = (
  to: string,
  from: string,
  subject: string,
  body: string
) =>
  fetch(`${process.env.EX_MWEROS_APIS}mailer`, {
    method: "POST",
    body: JSON.stringify({
      to,
      from,
      subject,
      body,
    }),
  });

export default mailSender;
