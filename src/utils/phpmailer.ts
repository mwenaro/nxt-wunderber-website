import { EX_API } from "@/constants";


const mailSender = (
  to: string,
  from: string,
  subject: string,
  body: string
) =>
  fetch(`${EX_API}mailer`, {
    method: "POST",
    body: JSON.stringify({
      to,
      from,
      subject,
      body,
    }),
  });

export default mailSender;
