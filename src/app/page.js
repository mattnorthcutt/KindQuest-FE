'use client';

import { Button } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link';

function Home() {
  const { user } = useAuth();

  return (
    <div style={{ position: 'relative', height: '90vh', width: '100vw' }}>
      {/* Main Content */}
      <div
        className="fade-in text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '100%',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.displayName}!</h1>
        <p className="text-info">Spread Kindness. One Project at a Time.</p>
        <img src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=" alt="Kindness illustration" style={{ maxWidth: '100%', margin: '20px auto' }} />

        <Link href="/projects" passHref>
          <Button variant="primary" type="button" size="lg" className="copy-btn mt-4" style={{ width: '100%' }}>
            View Projects
          </Button>
        </Link>

        <Link href="/projects/new" passHref>
          <Button variant="success" type="button" size="lg" className="copy-btn mt-4" style={{ width: '100%' }}>
            Create Project
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
