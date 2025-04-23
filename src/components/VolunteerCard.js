'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function VolunteerCard({ volunteerObj }) {
  return (
    <Card className="volunteer-card" style={{ width: '18rem', margin: '25px' }}>
      <Card.Img variant="top" src={volunteerObj.image || '/images/default-avatar.png'} alt={`${volunteerObj.firstName} ${volunteerObj.lastName}`} />
      <Card.Body>
        <Card.Title>{`${volunteerObj.firstName} ${volunteerObj.lastName}`}</Card.Title>
        <Card.Text>
          Email:
          <a href={`mailto:${volunteerObj.email}`}>{volunteerObj.email}</a>
        </Card.Text>
        <h5>Projects:</h5>
        <ul>
          {volunteerObj.projects.map((project) => (
            <li key={project.firebaseKey}>{project.name}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

VolunteerCard.propTypes = {
  volunteerObj: PropTypes.shape({
    image: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.string).isRequired,
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};

export default VolunteerCard;
