import sqlite3 from 'sqlite3';
// // import * as faker from '@Faker-js/faker';
// import { faker } from '@faker-js/faker';
// import { pwdHasher } from './password';
// import { create, getAll } from '@/models/TourBookingModel';


// create a database connection
// export const db = new sqlite3.Database('.mydatabase.sqlite');
export const db = new sqlite3.Database(`${process.cwd()}/public/db/wunderber.db`);

// // create a users table
// db.run(`
//   CREATE TABLE IF NOT EXISTS user (
//     id INTEGER PRIMARY KEY,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     salt TEXT NULL,
//     role TEXT NULL  DEFAULT user,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `, (error:any) => {
//   if (error) {
//     console.error('Error creating users table: ' + error.stack);
//   } else {
//     console.log('Users table created successfully');
//   }

//   // close the database connection
// //   db.close();
// });

// // COntactMessage/
// db.run(`
//   CREATE TABLE IF NOT EXISTS contact_email (
//     id INTEGER PRIMARY KEY,
//     name TEXT NOT NULL,
//     subject TEXT NOT NULL,
//     fro TEXT NOT NULL,
//     body TEXT NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `, (error:any) => {
//   if (error) {
//     console.error('Error creating contact table: ' + error.stack);
//   } else {
//     console.log('contact table created successfully');
//   }

//   // close the database connection
// //   db.close();
// });

// //Tour Booking/
// db.run(`
//   CREATE TABLE IF NOT EXISTS tour_booking (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL,
//     phone TEXT NOT NULL,
//     country TEXT NOT NULL,
//     specialInterests TEXT NOT NULL,
//     tourDuration TEXT NOT NULL,
//     adults INTEGER DEFAULT 0,
//     infants INTEGER DEFAULT 0,
//     kids INTEGER DEFAULT 0,
//     departureDate DATETIME NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `, (error:any) => {
//   if (error) {
//     console.error('Error creating contact table: ' + error.stack);
//   } else {
//     console.log('contact table created successfully');
//   }

//   // close the database connection
// //   db.close();
// });

// const sql = 'SELECT COUNT(id) as count FROM user group by id';

// // Execute the query
// const userSeeder =async ()=>{
//   let users:any = await getAll('user');

//   if(users && users.length>0) return ;

//   for (let i = 1; i <= 5; i++) {
//     const name = faker.name.findName();
//     const email = faker.internet.email();
//     const {hashedPassword, hashSalt}= pwdHasher('password');

//     await create('user', {name, email, password:hashedPassword, salt:hashSalt})
//   }

// }
// db.all(sql, [], (err, row):any => {
//   if (err) {
//     throw err;
//   }

//   // Check if the count is zero
//   console.log({row})
//   // return;
//   if (row.length > 0) {
//     console.log('The table is empty');


//     for (let i = 1; i <= 5; i++) {
//         const name = faker.name.findName();
//         const email = faker.internet.email();
//         // const password = faker.internet.email();
//         const {hashedPassword, hashSalt}= pwdHasher('password');
         
      
//         db.run(`
//           INSERT INTO user (name, email) VALUES (?, ?)
//         `, [name, email, hashedPassword, hashSalt], (error:any) => {
//           if (error) {
//             console.error('Error inserting user: ' + error.stack);
//           } else {
//             console.log(`User ${i} inserted successfully`);
//           }
//         });
//       }
    

//   } else {
//     console.log(`The table has ${row.length} rows`);
//   }
// });
