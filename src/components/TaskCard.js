import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Modal, Form } from 'react-bootstrap';

function TaskCard({ task, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleView = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body>
          <Card.Title>{task.jobName}</Card.Title>
          <Button variant="primary" onClick={handleView}>
            View
          </Button>{' '}
          <Button variant="warning" onClick={() => onEdit(task.id)}>
            Edit
          </Button>{' '}
          <Button variant="danger" onClick={() => onDelete(task.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      {/* Modal for viewing task details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" value={task.jobName} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Task Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={task.jobDescription} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Posted</Form.Label>
              <Form.Control type="text" value={task.datePosted} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Completed" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jobName: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskCard;
