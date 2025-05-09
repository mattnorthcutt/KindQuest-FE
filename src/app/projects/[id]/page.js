'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { getJobs, deleteJob } from '@/api/jobData';
import TaskCard from '@/components/TaskCard';
import { getProjectsById } from '@/api/projectData';

export default function ProjectPage() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState({});

  const getTheUpdatedJobs = () => {
    getJobs(parseInt(id, 10)).then((jobs) => setTasks(jobs));
  };

  useEffect(() => {
    if (id) {
      getTheUpdatedJobs();
      getProjectsById(id).then(setProject);
    }
  }, [id]);

  const handleUpdate = () => {
    getTheUpdatedJobs();
  };

  return (
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
      <div style={{ flex: 2 }}>
        <h2>Tasks</h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href={`/projects/${id}/tasks/new`} passHref>
            <Button variant="success">+ Add Task</Button>
          </Link>
        </div>
        {tasks.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={handleUpdate}
                onDelete={(jobId) => {
                  deleteJob(jobId).then(handleUpdate);
                }}
              />
            ))}
          </div>
        ) : (
          <p>No tasks found for this project.</p>
        )}
      </div>

      <div style={{ flex: 1 }}>
        <Card className="text-center" style={{ padding: '1.5rem', borderRadius: '12px' }}>
          <Card.Body>
            <Card.Title style={{ marginBottom: '20px', fontSize: '50px', textAlign: 'center' }}>{project.projectName}</Card.Title>
            <Card.Text>{project.projectDescription}</Card.Text>
            <Card.Text>
              <strong>Date Started:</strong>
              {project.datePosted?.split('T')[0]}
            </Card.Text>
            <Card.Text>
              <strong>Status:</strong>
              <span style={{ color: project.isCompleted ? 'green' : 'red' }}>{project.isCompleted ? 'Completed' : 'Not Completed'}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
