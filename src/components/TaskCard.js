'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Dropdown, ButtonGroup, Card } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import TaskForm from './forms/TaskForm';
import { deleteJob } from '../api/jobData';

function TaskCard({ task, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const deleteThisTask = (id) => {
    if (window.confirm(`Delete ${task.jobName}?`)) {
      deleteJob(id).then(() => {
        onUpdate();
      });
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <Card.Title className="mb-0">{task.jobName}</Card.Title>
          </div>
          <Dropdown as={ButtonGroup} align="end">
            <Dropdown.Toggle variant="light" className="border-0 p-1" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <BsThreeDotsVertical />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setShowModal(true)} className="view-action">
                View
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setEditModal(true)} className="edit-action">
                Edit
              </Dropdown.Item>
              <Dropdown.Item onClick={() => deleteThisTask(task.id)} className="text-danger">
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
              <Form.Control type="text" value={task.datePosted?.split('T')[0]} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Completed" checked={task.isCompleted} disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm
            obj={task}
            onUpdate={() => {
              setEditModal(false);
              onUpdate();
            }}
          />
        </Modal.Body>
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
  onUpdate: PropTypes.func,
};

TaskCard.defaultProps = {
  onUpdate: () => {},
};

export default TaskCard;
