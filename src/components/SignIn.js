import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

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
      <h1>
        Welcome to <span className="text-info">KindQuest</span>
      </h1>
      <img
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
      <p className="text-warning">Join us to change the world from your own neighborhood!</p>
      <p>Click the button below to login!</p>
      <Button type="button" variant="success" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
