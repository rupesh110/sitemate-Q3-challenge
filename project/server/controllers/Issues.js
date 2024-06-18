import { fetchIssuesDB, postIssueDB, updateIssueDB, deleteIssueDB } from "../database/db.js";

export const getIssues = (req, res) => {
    const issues = fetchIssuesDB();
    res.json(issues);
};

export const addIssue = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newIssue = postIssueDB(title, description);
    res.status(201).json(newIssue);
};

export const updateIssue = (req, res) => {
    const { id, title, description } = req.body;
    if (!id || !title || !description) {
        return res.status(400).json({ error: 'ID, title, and description are required' });
    }
    const updatedIssue = updateIssueDB(id, title, description);
    if (updatedIssue) {
        res.json(updatedIssue);
    } else {
        res.status(404).json({ error: 'Issue not found' });
    }
};

export const deleteIssue = (req, res) => {
    const { id } = req.body;
    console.log('deleteIssue', req.body);
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    const deletedIssue = deleteIssueDB(id);
    if (deletedIssue) {
        res.json(deletedIssue);
    } else {
        res.status(404).json({ error: 'Issue not found' });
    }
};
