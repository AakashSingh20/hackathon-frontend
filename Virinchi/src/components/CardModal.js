// CardModal.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css'
const CardModal = ({ show, onHide, onSave, title }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(text);
    setText('');
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          className="form-control"
          placeholder={`Enter ${title}`}
          value={text}
          onChange={handleTextChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
