'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Home() {
  const { user } = useAuth();
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Text Morph Animation
    gsap.to(textRef.current, {
      duration: 5,
      delay: 2, // Delay to allow initial text display
      text: 'Empowering everyday kindness in your community.',
      ease: 'power2.out',
    });

    // Image Fade-In + Scale-Up Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 }, // Start faded and smaller
      { opacity: 1, scale: 1, duration: 2, ease: 'power2.out', delay: 1 },
    );
  }, []);

  return (
    <div
      className="fade-in text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>
        Hello, <span className="username">{user?.displayName || 'Friend'}</span>!
      </h1>
      <p ref={textRef} className="text-info">
        Start your KindQuest!
      </p>

      {/* Image with GSAP animation */}
      <img
        ref={imageRef} // Attach GSAP reference
        src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs="
        alt="Kindness illustration"
        style={{ maxWidth: '100%', margin: '20px auto' }}
      />

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
  );
}

export default Home;
