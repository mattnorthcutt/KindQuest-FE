'use client';

import React, { useEffect, useState } from 'react';
import { getJobsById } from '@/api/jobData';
import TaskForm from '@/components/forms/TaskForm';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';

export default function EditTask() {
  const [editJob, setEditJob] = useState({});
  const { taskId } = useParams();

  useEffect(() => {
    getJobsById(taskId).then(setEditJob);
  }, [taskId]);

  return <TaskForm obj={editJob} />;
}

EditTask.propTypes = {
  params: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
  }).isRequired,
};
