'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getJobs } from '../../../api/jobData';
import TaskCard from '../../../components/TaskCard';

export default function ViewProjectTasks({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (projectId) {
      getJobs(projectId)
        .then((data) => setTasks(data))
        .catch((error) => console.error('Error fetching tasks:', error));
    }
  }, [projectId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h2>Project Tasks</h2>
        {tasks.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onEdit={() => console.log(`Edit ${task.id}`)} onDelete={() => console.log(`Delete ${task.id}`)} />
            ))}
          </div>
        ) : (
          <p>No tasks found for this project.</p>
        )}
      </div>
    </div>
  );
}

ViewProjectTasks.propTypes = {
  projectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
