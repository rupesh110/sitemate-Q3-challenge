import React, { useState } from 'react';

const Card = ({ issue, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description);

  const handleUpdate = () => {
    onUpdate(issue.id, title, description);
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <div style={styles.form}>
          <label style={styles.label}>Title</label>
          <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
          <label style={styles.label}>Description</label>
          <textarea style={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleUpdate}>Save</button>
            <button style={styles.button} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={styles.title}>{issue.title}</h2>
          <p style={styles.description}>{issue.description}</p>
          <button style={styles.button} onClick={() => setIsEditing(true)}>Edit</button>
          <button style={styles.button} onClick={() => onDelete(issue.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    marginBottom: '16px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    marginBottom: '16px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '5px'
  },
  title: {
    margin: '0 0 8px 0',
  },
  description: {
    margin: '0',
  },
};

export default Card;
