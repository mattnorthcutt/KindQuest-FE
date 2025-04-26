'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteProjects } from '../api/projectData';

function ProjectCard({ projectObj, onUpdate }) {
  const deleteThisProject = () => {
    if (window.confirm(`Delete ${projectObj.projectName}?`)) {
      deleteProjects(projectObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={projectObj?.projectImg || '/images/default-avatar.png'} />
      <Card.Body>
        <Card.Title>{projectObj?.projectName}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE TASK DETAILS  */}
        <Link href={`/projects/${projectObj?.id}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE PROJECT DETAILS  */}
        <Link href={`/projects/edit/${projectObj?.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisProject} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
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
