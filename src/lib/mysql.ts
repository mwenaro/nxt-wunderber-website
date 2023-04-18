import { MysqlError } from 'mysql';
import mysql from 'mysql2';

// create a connection to the database
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'adminpwd',
  database: 'gallery'
});

// connect to the database
connection.connect((err:any) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database with ID: ' + connection.threadId);
});

// // perform a query
// connection.query('SELECT * FROM users', (err: mysql.MysqlError, rows: any[]) => {
//   if (err) throw err;
//   console.log('Data received from database:\n');
//   console.log(rows);
// });

// close the connection
// connection.end((err: any) => {
//   if (err) {
//     console.error('Error closing database: ' + err.stack);
//     return;
//   }
//   console.log('Database connection closed.');
// });
