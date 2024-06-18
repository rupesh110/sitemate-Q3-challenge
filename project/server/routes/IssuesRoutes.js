import express from 'express';
import { getIssues, updateIssue, addIssue, deleteIssue } from '../controllers/Issues.js';

const router = express.Router();

router.get('/issues', getIssues);
router.post('/issues/add', addIssue);
router.put('/issues/update', updateIssue);
router.delete('/issues/delete', deleteIssue);

export default router;
