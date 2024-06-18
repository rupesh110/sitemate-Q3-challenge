import React, { useState } from 'react';
import { useGetIssuesQuery, useAddIssueMutation, useUpdateIssueMutation, useDeleteIssueMutation } from '../store/api';
import Card from "../components/cards/Card";
import IssueFormModal from "../components/modals/FormModal";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Home = () => {
  const { data, error, isLoading } = useGetIssuesQuery();
  const [addIssue] = useAddIssueMutation();
  const [updateIssue] = useUpdateIssueMutation();
  const [deleteIssue] = useDeleteIssueMutation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log('data:', data);
  console.log('error:', error);
  console.log('isLoading:', isLoading);

  const handleCreate = async (issue) => {
    await addIssue(issue);
    setModalIsOpen(false);
  };

  const handleUpdate = (id, title, description) => {
    updateIssue({ id, title, description });
  };

  const handleDelete = (id) => {
    console.log('deleteIssue', id);
    deleteIssue(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div>
      <h1>Issues</h1>
      <button onClick={() => setModalIsOpen(true)}>Create Issue</button>
      <IssueFormModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onSubmit={handleCreate}
      />
      {data.map(issue => (
        <Card key={issue.id} issue={issue} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
