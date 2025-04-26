'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/api/projectData';
import { useAuth } from '@/utils/context/authContext';

function ProjectsPage() {
  const [Projects, setProjects] = useState([]);

  // Get user ID using useAuth Hook
  const { user } = useAuth();

  // create a function that makes the API call to get all the projects
  const getAllTheProjects = () => {
    getProjects(user.id).then(setProjects);
  };

  // make the call to the API to get all the Projects on component render
  useEffect(() => {
    getAllTheProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fade-in text-center my-4">
      <Link href="/projects/new" passHref>
        <Button>Add A Project</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over Projects here using ProjectCard component */}
        {Projects.map((project) => (
          <ProjectCard key={project.id} ProjectObj={project} onUpdate={getAllTheProjects} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
