import React, { useState } from 'react';
import Modal from 'react-modal';

const IssueFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Create Issue">
      <h2>Create Issue</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={styles.input} 
          required 
        />
        <label style={styles.label}>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={styles.textarea} 
          required 
        />
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Create</button>
          <button type="button" style={styles.button} onClick={onRequestClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

const styles = {
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
};

export default IssueFormModal;
