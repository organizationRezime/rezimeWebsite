import express from 'express';
import { createQuery, getQueries } from '../controllers/query.controllers.js';

const router = express.Router();

router.post('/create', createQuery);

router.get('/get' ,getQueries);

export default router;