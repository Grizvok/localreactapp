import express from 'express';
const router = express.Router();

router.post('/api/register', (req, res) => {
  console.log(req.body);
});

module.exports = router;