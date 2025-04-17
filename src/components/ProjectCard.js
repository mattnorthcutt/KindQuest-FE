'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import { deleteProjectTasks } from '@/api/mergedData';

function ProjectCard({ projectObj /* onUpdate */ }) {
  /* const deleteThisProject = () => {
    if (window.confirm(`Delete ${projectObj.name}?`)) {
      deleteProjectTasks(projectObj.firebaseKey).then(() => onUpdate());
    }
  }; */

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={projectObj.image || '/images/default-avatar.png'} />
      <Card.Body>
        <Card.Title>{projectObj.name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE TASK DETAILS  */}
        <Link href={`/projects/${projectObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE PROJECT DETAILS  */}
        <Link href={`/projects/edit/${projectObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        {/* <Button variant="danger" onClick={deleteThisProject} className="m-2">
            DELETE
          </Button> */}
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default ProjectCard;
