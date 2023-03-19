
const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (email:string='mweroabdalla@gmail.com', name:string='Mwero Abdalla', amount:number=1200) => {
let result:any={error:"",flag:false}
let info1;
  try {
    // Create a nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST, // Enter your SMTP server host name
      port: 465, // Enter the SMTP port number
      secure: false, // Set to true if you're using SSL/TLS
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
      subject: 'Confirmation of Booking',
      text: `Dear ${name},\n\nThank you for booking with us. We have received your payment of $${amount} and your booking is confirmed.\n\nWe look forward to seeing you on your tour!\n\nBest regards,\nThe Tour Company`
    };

    // Send the email
    const info=info1 = await transporter.sendMail(message);
    console.log(`Email sent to ${email}: ${info.response}`);
    return {...result, flag:true}
  } catch (error:any) {

    console.log(error.message);
    return {...result, error:error.message, info1}
  }

};


export default  sendConfirmationEmail 