let issues = [
    { id: 1, title: 'Issue 1', description: 'Description 1' },
    { id: 2, title: 'Issue 2', description: 'Description 2' },
];

export const fetchIssuesDB = () => {
    return issues;
}

export const postIssueDB = (title, description) => {
    const newIssue = { id: issues.length + 1, title, description };
    issues.push(newIssue);
    return newIssue;
}

export const updateIssueDB = (id, title, description) => {
    const index = issues.findIndex(issue => issue.id === id);
    if (index > -1) {
        issues[index] = { id, title, description };
        return issues[index];
    }
    return null;
}

export const deleteIssueDB = (id) => {
    console.log('deleteIssueDB', id);
    const index = issues.findIndex(issue => issue.id === id);
    if (index > -1) {
        const [deletedIssue] = issues.splice(index, 1);
        return deletedIssue;
    }
    return null;
}
