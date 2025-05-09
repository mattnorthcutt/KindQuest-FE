'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createProject, updateProjects } from '@/api/projectData';
import { useAuth } from '@/utils/context/authContext';

const initialState = {
  id: '',
  projectName: '',
  projectDescription: '',
  location: '',
  projectImg: '',
  datePosted: new Date().toISOString().split('T')[0],
  isCompleted: false,
};

function ProjectForm({ obj = initialState, onUpdate }) {
  const [formInput, setFormInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setFormInput({
        ...obj,
        datePosted: obj.datePosted ? obj.datePosted.split('T')[0] : new Date().toISOString().split('T')[0],
      });
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.uid) {
      alert('User not authenticated');
      return;
    }

    if (!formInput.projectName || !formInput.projectDescription || !formInput.location) {
      alert('Please fill out all required fields.');
      return;
    }

    const payload = {
      ...formInput,
      datePosted: new Date(formInput.datePosted).toISOString(),
      userId: user.uid,
      Uid: user.uid,
      CreatorUid: user.uid,
    };

    console.log('Payload being sent:', payload);

    try {
      if (!formInput.id || typeof formInput.id !== 'string' || formInput.id.trim() === '') {
        delete payload.id; // Ensure new project doesn't carry an existing ID
        const { id } = await createProject(payload);
        if (onUpdate) {
          onUpdate();
        }
        router.push(`/projects/${id}`);
      } else {
        const projectId = String(formInput.id).trim();
        await updateProjects(projectId, payload);
        if (onUpdate) {
          onUpdate();
        }
        router.push(`/projects/${projectId}`);
      }
    } catch (error) {
      console.error('Project submission failed:', error.message);
      alert(`Failed to save project: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{formInput.id ? 'Update' : 'Create'} Project</h2>

      <FloatingLabel controlId="floatingInput1" label="Project Name" className="mb-3">
        <Form.Control type="text" name="projectName" value={formInput.projectName} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Project Description" className="mb-3">
        <Form.Control as="textarea" name="projectDescription" value={formInput.projectDescription} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Location" className="mb-3">
        <Form.Control type="text" name="location" value={formInput.location} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Main Image URL" className="mb-3">
        <Form.Control type="url" name="projectImg" value={formInput.projectImg} onChange={handleChange} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Date Posted" className="mb-3">
        <Form.Control type="date" name="datePosted" value={formInput.datePosted} onChange={handleChange} required />
      </FloatingLabel>

      <Form.Check className="text-white mb-3" type="switch" id="isCompleted" name="isCompleted" label="Is Completed?" checked={formInput.isCompleted} onChange={handleToggleChange} />

      <Button type="submit">{formInput.id ? 'Update' : 'Create'} Project</Button>
    </Form>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    Uid: PropTypes.string,
    CreatorUid: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    location: PropTypes.string,
    projectImg: PropTypes.string,
    datePosted: PropTypes.string,
    isCompleted: PropTypes.bool,
  }),
  onUpdate: PropTypes.func.isRequired,
};

export default ProjectForm;
