const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

/**
 * Remove all the commented code, there's no reason to commit it.
 * If you will need some old code - you can always get it from git history.
 */

//app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

/**
 * Formatting lacks consistency (e.g. mismtached number of spaces)
 * I'd recommend setting up something like prettier along with eslint
 */

 app.get('/api/users', function(req, res) {
   res.json([
     {id: 1, username: "somebody"},
     {id: 2, username: "somebody_else"}
   ]);
 });

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
