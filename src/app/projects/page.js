'use client';

// import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';

function ProjectsPage() {
  // const [Projects, setProjects] = useState([]);

  // Get user ID using useAuth Hook
  // const { user } = useAuth();

  // create a function that makes the API call to get all the projects
  // const getAllTheProjects = () => {
  //   getProjects(user.uid).then(setProjects);
  // };

  // make the call to the API to get all the Authors on component render
  // useEffect(() => {
  //   getAllTheProjects();
  // }, []);

  return (
    <div className="text-center my-4">
      <Link href="/projects/new" passHref>
        <Button>Add A Project</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over Authors here using BookCard component
        {Projects.map((project) => (
          <ProjectCard key={project.firebaseKey} AuthorObj={project} onUpdate={getAllTheProjects} />
        ))} */}
      </div>
    </div>
  );
}

export default ProjectsPage;
