const nodemailer = require('nodemailer');

export const sendConfirmationEmail = async (email:string='mweroabdalla@gmail.com', name:string='Mwero Abdalla', amount:number=1200) => {
let result:any={error:"",flag:false}
  try {
    // Create a nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Enter your SMTP server host name
      port: 465, // Enter the SMTP port number
      secure: true, // Set to true if you're using SSL/TLS
      auth: {
        user: `${process.env.EMAIL_USER}`, // Enter your domain email address
        pass: `${process.env.EMAIL_PWD}` // Enter your domain email password
      },
      tls: {
        rejectUnauthorized: true // Set to true if your SMTP server has a valid SSL/TLS certificate
      }
    });

    // Define the email message
    const message = {
      from: process.env.EMAIL_USER, // Use your domain email address as the sender
      to: email,
      subject: 'Confirmation of Booking',
      text: `Dear ${name},\n\nThank you for booking with us. We have received your payment of $${amount} and your booking is confirmed.\n\nWe look forward to seeing you on your tour!\n\nBest regards,\nThe Tour Company`
    };

    // Send the email
    const info = await transporter.sendMail(message);
    console.log(`Email sent to ${email}: ${info.response}`);
    return {...result, flag:true}
  } catch (error:any) {

    console.log(error.message);
    return {...result, error}
  }

};


