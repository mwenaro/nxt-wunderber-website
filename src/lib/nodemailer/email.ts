
const nodemailer = require('nodemailer');
// dotenv.config();
const sendConfirmationEmail = async (
  email:string='mashudimwayama@gmail.com', 
  name:string='Mashudi', 
  amount:number=1200) => {
let result:any={error:"",flag:false}
let info1;
  try {
    // Create a nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST, // Enter your SMTP server host name
      port: 465, // Enter the SMTP port number
      secure: true, // Set to true if you're using SSL/TLS
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Enter your domain email address
        pass: process.env.NEXT_PUBLIC_EMAIL_PWD ,// Enter your domain email password
        method: 'PLAIN',
      },
      // tls: {
      //   rejectUnauthorized: false // Set to true if your SMTP server has a valid SSL/TLS certificate
      // }
    });

    // Define the email message
    const message = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER, // Use your domain email address as the sender
      to: email,
      subject: 'Booking Confirmation',
      text: `Dear ${name},\n
      Thank you for making reservation with us. Your booking has been received and confirmed.  
      Our representative will get back to you as soon as possible.\n\nBest regards,\n Wunderber Kenia Adventures.`
    };

    // Send the email
    const info=info1 = await transporter.sendMail(message);
    console.log(`Email sent to ${email}: ${info.response}`);
    return {...result, flag:true, info}
  } catch (error:any) {

    console.log(error.message);
    return {...result, error:error.message, info1,flag:false}
  }

};


export default  sendConfirmationEmail 