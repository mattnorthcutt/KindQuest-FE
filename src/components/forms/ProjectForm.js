'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createProject } from '@/api/projectData';
import { useAuth } from '@/utils/context/authContext';

const initialState = {
  userId: '',
  projectName: '',
  projectDescription: '',
  location: '',
  projectImg: '',
  isCompleted: false,
};

function ProjectForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.projectId) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInput.projectName || !formInput.projectDescription || !formInput.location) {
      return;
    }

    const payload = {
      ...formInput,
      Uid: user.uid,
      CreatorUid: user.uid,
      datePosted: new Date(formInput.datePosted).toISOString(),
    };

    console.log('payload being sent:', payload);

    createProject(payload).then(({ id }) => {
      router.push(`/projects/${id}`);
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.projectId ? 'Update' : 'Create'} Project</h2>

      {/* PROJECT NAME INPUT */}
      <FloatingLabel controlId="floatingInput1" label="Project Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter project name" name="projectName" value={formInput.projectName} onChange={handleChange} required />
      </FloatingLabel>

      {/* PROJECT DESCRIPTION INPUT */}
      <FloatingLabel controlId="floatingTextarea" label="Project Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Enter project description" style={{ height: '100px' }} name="projectDescription" value={formInput.projectDescription} onChange={handleChange} required />
      </FloatingLabel>

      {/* LOCATION INPUT */}
      <FloatingLabel controlId="floatingInput2" label="Location" className="mb-3">
        <Form.Control type="text" placeholder="Enter location" name="location" value={formInput.location} onChange={handleChange} required />
      </FloatingLabel>

      {/* IMAGE URL INPUT */}
      <FloatingLabel controlId="floatingInput3" label="Main Image URL" className="mb-3">
        <Form.Control type="url" placeholder="Enter image URL (optional)" name="projectImg" value={formInput.projectImg} onChange={handleChange} />
      </FloatingLabel>

      {/* DATE POSTED INPUT */}
      <FloatingLabel controlId="floatingInput4" label="Date Posted" className="mb-3">
        <Form.Control type="date" name="datePosted" value={formInput.datePosted} onChange={handleChange} required />
      </FloatingLabel>

      {/* IS COMPLETED TOGGLE */}
      <Form.Check className="text-white mb-3" type="switch" id="isCompleted" name="isCompleted" label="Is Completed?" checked={formInput.isCompleted} onChange={handleToggleChange} />

      {/* SUBMIT BUTTON */}
      <Button type="submit">{obj.projectId ? 'Update' : 'Create'} Project</Button>
    </Form>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape({
    userId: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    location: PropTypes.string,
    projectImg: PropTypes.string,
    datePosted: PropTypes.string,
    isCompleted: PropTypes.bool,
  }),
};

ProjectForm.defaultProps = {
  obj: initialState,
};

export default ProjectForm;
