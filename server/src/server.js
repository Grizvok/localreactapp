require('dotenv').config();
import express from 'express';
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/api/users', (req, res) => {
  console.log(process.env.DB_USER);
   res.json([
     {id: 1, username: "somebody"},
     {id: 2, username: "somebody_else"}
   ]);
 });

 app.post('/api/register', (req, res) => {
   console.log(req.body);
 });

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
