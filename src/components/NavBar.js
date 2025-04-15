/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container
        style={{
          margin: 0,
        }}
      >
        <Link
          passHref
          href="/"
          className="navbar-brand"
          style={{
            width: '75px',
            height: '75px',
          }}
        >
          <img
            style={{
              borderRadius: '50px',
              width: '75px',
              height: '75px',
            }}
            src="/images/logonav.png"
            alt="home"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="home">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/">
              Home
            </Link>
          </Nav>
          <Nav className="org">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/organizations">
              Organizations
            </Link>
          </Nav>
          <Nav className="vol">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/volunteers">
              Volunteers
            </Link>
          </Nav>
          <Nav className="about">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/about-us">
              About
            </Link>
          </Nav>

          <Button
            variant="danger"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            onClick={signOut}
          >
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
