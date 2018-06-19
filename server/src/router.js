import express from 'express';
const router = express.Router();

import register from './auth/register';

router.use('/api/register', register);

module.exports = router;