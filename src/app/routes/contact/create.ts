// import mongoDB from "@/lib/mongoose";
// import { sendConfirmationEmail } from "@/lib/nodemailer";
// import { ContactMail } from "@/models/mongoose";

// export default async function create (
//   body:any
// ) {

//   const { email: fro, fullName: name, ...rest } = body;
//   let data: any = { fro, name, ...rest };
//   console.log({ data });

//   let result: any;

  
//     try {
//       await mongoDB();
//       let saved = await ContactMail.create(data);

//       const name = data.name.trim().split(" ").pop();
//       const admin = await sendConfirmationEmail(
//         process.env.NEXT_PUBLIC_EMAIL_USER,
//         "Admin",
//         `Contact (${data.subject}) Notification`,
//         `You have contact notification from ${name} on ${data.subject}. \n Kindly check and respond ASAP!`
//       );
//       const guest = await sendConfirmationEmail(
//         data.email,
//         name,
//         data.subject,
//         `Dear ${name},\n
//       Thank you for contacting us. Our representative will get back to you as soon as posible. \nBest regards,\n Wunderber Kenia Adventures.`
//       );

//       result = { email: { admin, guest }, data: saved };
//       console.log(result);
//       res.status(200).json(result);
//     } catch (error: any) {
//       result = { error: error.message + " " };
//       console.log(result);
//       res.status(500).json(result);
//     }
//   } else {
    
//   }
// }

export {}