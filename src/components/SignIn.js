import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import TypewriterEffect from './TypewriterEffect';

function Signin() {
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
      <TypewriterEffect />
      <img
        className="spin-on-load"
        style={{
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          margin: '20px auto',
          display: 'block',
        }}
        src="/images/logonav.png"
        alt="KindQuest Logo"
      />
      <p className="lead text-light fade-in">Empowering everyday kindness through community-driven action.</p>
      <Button type="button" variant="warning" size="lg" className="copy-btn fade-in" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
