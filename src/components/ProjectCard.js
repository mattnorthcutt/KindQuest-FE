'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ProjectForm from './forms/ProjectForm';
import { deleteProjects } from '../api/projectData';

function ProjectCard({ projectObj, onUpdate }) {
  const [showModal, setShowModal] = useState(false);

  const deleteThisProject = () => {
    if (window.confirm(`Delete ${projectObj.projectName}?`)) {
      deleteProjects(projectObj.id).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={projectObj.projectImg || '/images/default-avatar.png'} />
        <Card.Body>
          <Card.Title>{projectObj?.projectName}</Card.Title>

          {/* VIEW BUTTON */}
          <Button variant="primary" className="m-2" href={`/projects/${projectObj.id}`}>
            VIEW
          </Button>

          {/* EDIT BUTTON OPENS MODAL */}
          <Button variant="info" onClick={() => setShowModal(true)}>
            EDIT
          </Button>

          {/* DELETE BUTTON */}
          <Button variant="danger" onClick={deleteThisProject} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>

      {/* EDIT PROJECT FORM MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{projectObj.id ? 'Update Project' : 'Create Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm obj={projectObj.id ? projectObj : { ...projectObj, id: undefined }} />
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
