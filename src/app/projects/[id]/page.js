'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { getJobs, deleteJob } from '@/api/jobData';
import TaskCard from '@/components/TaskCard';
import { getProjectWithVolunteers, updateProjects } from '@/api/projectData';
import { useAuth } from '@/utils/context/authContext';
import { getUsersByUid } from '@/api/userData';

export default function ProjectPage() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState({});
  const [joinedUsers, setJoinedUsers] = useState([]);
  const { user } = useAuth();

  const getTheUpdatedJobs = () => {
    getJobs(parseInt(id, 10)).then(setTasks);
  };

  const getProjDet = () => {
    getProjectWithVolunteers(id).then((proj) => {
      setProject(proj);
      setJoinedUsers(proj.volunteers || []);
    });
  };

  useEffect(() => {
    if (id) {
      getTheUpdatedJobs();
      getProjDet();
    }
  }, [id]);

  const handleJoiningProjects = () => {
    getUsersByUid(user.uid).then((currentUser) => {
      if (!currentUser) return;

      getProjectWithVolunteers(id).then((projectObj) => {
        const hasJoined = (projectObj.volunteers || []).some((vol) => vol.id === currentUser.id);

        if (hasJoined) {
          console.log('User already joined this project.');
          return;
        }

        const updatedProject = {
          ...projectObj,
          volunteers: [...(projectObj.volunteers || []).map((v) => ({ id: v.id })), { id: currentUser.id }],
        };

        updateProjects(updatedProject)
          .then(() => {
            console.log('User successfully joined project.');
            getProjDet();
          })
          .catch((err) => {
            console.error('Error updating project:', err);
          });
      });
    });
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
                onUpdate={getTheUpdatedJobs}
                onDelete={(jobId) => {
                  deleteJob(jobId).then(getTheUpdatedJobs);
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

            <Button variant="primary" onClick={handleJoiningProjects} className="my-3">
              Join Project
            </Button>

            <Card.Text>
              <strong>Joined Volunteers:</strong>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {joinedUsers.length === 0 ? (
                  <li>No Volunteers</li>
                ) : (
                  joinedUsers.map((vol) => (
                    <li key={vol.id}>
                      {vol.firstName} {vol.lastName}
                    </li>
                  ))
                )}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
