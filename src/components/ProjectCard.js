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
    if (window.confirm(`Are you sure you want to delete "${projectObj.projectName}"?`)) {
      try {
        await deleteProjects(Number(projectObj.id));
        if (onUpdate) {
          onUpdate();
        }
      } catch (error) {
        console.error('Delete failed:', error.message);
        alert(`Failed to delete project: ${error.message}`);
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

          <Button variant="info" onClick={() => setShowModal(true)}>
            EDIT
          </Button>

          <Button variant="danger" onClick={deleteThisProject} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{projectObj.id ? 'Update Project' : 'Create Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm key={projectObj.id} obj={projectObj} onUpdate={onUpdate} />
        </Modal.Body>
      </Modal>
    </>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    projectImg: PropTypes.string,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string,
    location: PropTypes.string,
    datePosted: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProjectCard;
