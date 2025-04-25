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

  // split(' '): breaks "Matt Northcutt" -> ['Matt', 'Northcutt']
  // charAt(0).toUpperCase() -> M, N
  // slice(1).toLowerCase() -> att, orthcutt
  // Rejoins -> "Matt Northcutt"
  function capitalizeName(name) {
    if (!name) return '';
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  useEffect(() => {
    // Apply background to <body> only when this component mounts
    document.body.classList.add('home-background');

    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);

  useEffect(() => {
    // Text Morph Animation
    gsap.to(textRef.current, {
      duration: 5,
      delay: 2,
      text: 'Empowering everyday kindness in your community.',
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="fade-in text-center d-flex flex-column justify-content-center align-items-center home-container">
      <div className="content-box">
        <h1>
          Hello, <span className="username">{capitalizeName(user?.displayName) || 'Friend'}</span>!
        </h1>
        <p ref={textRef} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#01110a' }}>
          {' '}
          Start your KindQuest!{' '}
        </p>
        <Link href="/projects" passHref>
          <Button variant="success" type="button" size="md" className="copy-btn mt-4">
            View Projects
          </Button>
        </Link>

        <Link href="/projects/new" passHref>
          <Button variant="info" type="button" size="md" className="copy-btn mt-4">
            Create Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
