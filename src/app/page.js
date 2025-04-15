'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link'; // Import the Link component from Next.js

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <p>Spread Kindness. One Project at a Time.</p>
      <img src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=" alt="Kindness illustration" style={{ maxWidth: '100%', margin: '20px auto' }} />

      <Button variant="primary" type="button" size="lg" className="copy-btn">
        Explore Projects
      </Button>

      {/* Use Next.js Link for navigation */}
      <Link href="/projects/new" passHref>
        <Button variant="info" type="button" size="lg" className="copy-btn mt-4">
          Create New Project
        </Button>
      </Link>
    </div>
  );
}

export default Home;
