'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getJobsByProjectId } from '../../../api/jobData';
import TaskCard from '../../../components/TaskCard';

export default function ProjectPage() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (id) {
      getJobsByProjectId(id)
        .then((data) => setTasks(data))
        .catch((error) => console.error('Error fetching tasks:', error));
    }
  }, [id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Project Tasks</h2>
      <Link href={`${id}/tasks/new`} passHref>
        <Button>Add A Task</Button>
      </Link>
      {tasks.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={() => console.log(`Edit ${task.id}`)} onDelete={() => console.log(`Delete ${task.id}`)} />
          ))}
        </div>
      ) : (
        <p>No tasks found for this project.</p>
      )}
    </div>
  );
}
