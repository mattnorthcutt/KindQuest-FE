'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '3px Solid grey',
        width: '100%',
        backgroundColor: '#202325', // Matches the dark theme of Navbar
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Container>
        {/* Footer Navigation Links */}
        <Nav className="justify-content-center mb-3">
          <Nav.Item>
            <Link href="/privacy" passHref legacyBehavior>
              <Nav.Link className="text-light">Privacy Policy</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/terms" passHref legacyBehavior>
              <Nav.Link className="text-light">Terms of Service</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link className="text-light">About</Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>

        {/* Contact Info */}
        <div style={{ textAlign: 'center', fontSize: '14px' }}>
          <p className="mb-2">
            Questions? Contact us at{' '}
            <a href="mailto:info@kindquest.org" className="text-light text-decoration-none">
              info@kindquest.org
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} KindQuest. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
