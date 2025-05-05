'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createJob } from '@/api/jobData';
import { useAuth } from '@/utils/context/authContext';
import { getUsersByUid } from '@/api/userData';

const initialState = {
  jobName: '',
  jobDescription: '',
  datePosted: new Date().toISOString().split('T')[0],
  isCompleted: false,
};

function TaskForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  const [userDbId, setUserDbId] = useState(null);
  const router = useRouter();
  const { user } = useAuth();
  const { id: projectId } = useParams();

  useEffect(() => {
    if (obj.id) setFormInput(obj);
  }, [obj]);

  useEffect(() => {
    if (user?.uid) {
      getUsersByUid(user.uid).then((userObj) => {
        if (userObj?.id) setUserDbId(userObj.id);
      });
    }
  }, [user]);

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
    if (!formInput.jobName || !formInput.jobDescription) {
      // return;
    }

    const payload = {
      ...formInput,
      userId: userDbId,
      projectId: parseInt(projectId, 10),
      datePosted: new Date(formInput.datePosted).toISOString(),
    };

    console.log('Payload to send:', payload);

    createJob(payload).then(({ id }) => {
      router.push(`/projects/${id}`);
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Task</h2>

      {/* TASK NAME INPUT */}
      <FloatingLabel controlId="floatingInput1" label="Task Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter task name" name="jobName" value={formInput.jobName} onChange={handleChange} required />
      </FloatingLabel>

      {/* TASK DESCRIPTION INPUT */}
      <FloatingLabel controlId="floatingTextarea" label="Task Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Enter Task description" style={{ height: '100px' }} name="jobDescription" value={formInput.jobDescription} onChange={handleChange} required />
      </FloatingLabel>

      {/* DATE POSTED INPUT */}
      <FloatingLabel controlId="floatingInput4" label="Date Posted" className="mb-3">
        <Form.Control type="date" name="datePosted" value={formInput.datePosted} onChange={handleChange} required />
      </FloatingLabel>

      {/* IS COMPLETED TOGGLE */}
      <Form.Check className="text-white mb-3" type="switch" id="isCompleted" name="isCompleted" label="Is Completed?" checked={formInput.isCompleted} onChange={handleToggleChange} />

      {/* SUBMIT BUTTON */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Task</Button>
    </Form>
  );
}

TaskForm.propTypes = {
  obj: PropTypes.shape({
    jobName: PropTypes.string,
    jobDescription: PropTypes.string,
    datePosted: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.string,
  }),
};

TaskForm.defaultProps = {
  obj: initialState,
};

export default TaskForm;
