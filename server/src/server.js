require('dotenv').config();
const express = require('express');
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

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
