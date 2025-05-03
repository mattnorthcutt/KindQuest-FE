'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ProjectForm from './forms/ProjectForm';
import { deleteProjects } from '../api/projectData';

function ProjectCard({ projectObj, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const deleteThisProject = async () => {
    if (window.confirm(`Delete ${projectObj.projectName}?`)) {
      try {
        await deleteProjects(projectObj.id);
        onUpdate();
      } catch (error) {
        console.error('Delete failed:', error);
        alert('Failed to delete the project. Please try again.');
      }
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

      {/* EDIT PROJECT FORM MODAL (Fixing state updates with `key` prop) */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{projectObj.id ? 'Update Project' : 'Create Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm key={projectObj.id} obj={projectObj.id ? projectObj : { ...projectObj, id: undefined }} />
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
