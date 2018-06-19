require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
//import morgan from 'morgan';
const path = require('path');
const app = express();
const port = 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(cookieParser());
app.use(require('./router'));


app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// app.get('/api/users', (req, res) => {
//   console.log(process.env.DB_USER);
//    res.json([
//      {id: 1, username: "somebody"},
//      {id: 2, username: "somebody_else"}
//    ]);
//  });

//  app.post('/api/register', (req, res) => {
//    console.log(req.body);
//  });

//  app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
