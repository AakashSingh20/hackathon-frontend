// CardModal.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css'

const CardModal = ({ show, onHide, onSave, title, setTitle, label }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(newTitle);
  };

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          className="form-control"
          placeholder={`Enter new ${label}`}
          value={newTitle}
          onChange={handleTitleChange}
          style={{ height: '100px' }} // Adjust the height as needed
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
