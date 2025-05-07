'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ProjectForm from './forms/ProjectForm';
import { deleteProjects, updateProjects } from '../api/projectData';

function ProjectCard({ projectObj, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Handle deletion with correct ID format
  const deleteThisProject = async () => {
    if (window.confirm(`Are you sure you want to delete "${projectObj.projectName}"?`)) {
      try {
        await deleteProjects(Number(projectObj.id)); // Ensure ID is a number
        onUpdate(); // Refresh the project list
      } catch (error) {
        console.error('Delete failed:', error.message);
        alert(`Failed to delete project: ${error.message}`);
      }
    }
  };

  // Handle edit submission correctly
  const handleEditSubmit = async (updatedFields) => {
    try {
      if (!updatedFields || typeof updatedFields !== 'object') {
        alert('Error: Invalid update data.');
        return;
      }

      const sanitizedFields = { ...updatedFields }; // Clone object to prevent param reassign

      if ('id' in sanitizedFields) {
        console.warn('ID cannot be modified.');
        delete sanitizedFields.id;
      }

      await updateProjects(projectObj.id, sanitizedFields);
      setShowModal(false); // Close modal after successful update
      onUpdate(); // Refresh UI
    } catch (error) {
      console.error('Edit failed:', error.message);
      alert(`Failed to update project: ${error.message}`);
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={projectObj.projectImg?.trim() ? projectObj.projectImg : '/images/default-avatar.png'} alt="Project Image" />
        <Card.Body>
          <Card.Title>{projectObj?.projectName}</Card.Title>

          <Button variant="primary" className="m-2" onClick={() => router.push(`/projects/${projectObj.id}`)}>
            VIEW
          </Button>

          {/* EDIT BUTTON OPENS MODAL */}
          <Button variant="info" onClick={() => setShowModal(true)}>
            EDIT
          </Button>

          <Button variant="danger" onClick={deleteThisProject} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>

      {/* EDIT PROJECT FORM MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm key={projectObj.id} obj={projectObj.id ? projectObj : { ...projectObj, id: undefined }} onSubmit={handleEditSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    projectImg: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProjectCard;
