'use client';

import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
// import { createTask } from '../../api/taskData';

const initialState = {
  taskName: '',
  taskDescription: '',
  datePosted: new Date().toISOString().split('T')[0],
  isCompleted: false,
};

function TaskForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  // const router = useRouter();
  // const { user } = useAuth();

  useEffect(() => {
    if (obj.taskId) setFormInput(obj);
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
    if (!formInput.taskName || !formInput.taskDescription) {
      // return;
    }

    // const payload = {
    //   ...formInput,
    //   userId: user.uid,
    // };

    // createTask(payload).then(({ id }) => {
    //   router.push(`/tasks/${id}`);
    // });
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.taskId ? 'Update' : 'Create'} Task</h2>

      {/* TASK NAME INPUT */}
      <FloatingLabel controlId="floatingInput1" label="Task Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter task name" name="taskName" value={formInput.taskName} onChange={handleChange} required />
      </FloatingLabel>

      {/* TASK DESCRIPTION INPUT */}
      <FloatingLabel controlId="floatingTextarea" label="Task Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Enter Task description" style={{ height: '100px' }} name="taskDescription" value={formInput.taskDescription} onChange={handleChange} required />
      </FloatingLabel>

      {/* DATE POSTED INPUT */}
      <FloatingLabel controlId="floatingInput4" label="Date Posted" className="mb-3">
        <Form.Control type="date" name="datePosted" value={formInput.datePosted} onChange={handleChange} required />
      </FloatingLabel>

      {/* IS COMPLETED TOGGLE */}
      <Form.Check className="text-white mb-3" type="switch" id="isCompleted" name="isCompleted" label="Is Completed?" checked={formInput.isCompleted} onChange={handleToggleChange} />

      {/* SUBMIT BUTTON */}
      <Button type="submit">{obj.taskId ? 'Update' : 'Create'} Task</Button>
    </Form>
  );
}

TaskForm.propTypes = {
  obj: PropTypes.shape({
    taskName: PropTypes.string,
    taskDescription: PropTypes.string,
    datePosted: PropTypes.string,
    isCompleted: PropTypes.bool,
    projectId: PropTypes.string,
  }),
};

TaskForm.defaultProps = {
  obj: initialState,
};

export default TaskForm;
