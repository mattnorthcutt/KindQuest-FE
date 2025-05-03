'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import TaskForm from '../../../../../components/forms/TaskForm';

export default function NewProjectTaskPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Create Task for Project {id}</h1>
      <TaskForm projectId={id} />
    </div>
  );
}
