/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import { useTheme } from '@/utils/context/ThemeContext';
import Link from 'next/link';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext';
import { FiLogOut } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const [userImg, setUserImg] = useState(null);

  // const { theme, toggleTheme } = useTheme();

  const { user } = useAuth();

  useEffect(() => {
    setUserImg(user.photoURL || '/images/default-avatar.png');
  }, [user.photoURL]);

  console.log('Current user:', user);

  return (
    <Navbar style={{ width: '100%' }} collapseOnSelect expand="md" bg="dark" variant="dark">
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
          className="fade-in"
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
        {user ? (
          <Dropdown
            className="bg-dark text-white ms-auto mr-5"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: 'grey',
            }}
            align="end"
          >
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-user"
              className="d-flex align-items-center border-dark rounded px-2"
              style={{
                borderColor: 'grey',
              }}
            >
              <Image
                className="fade-in"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '100px',
                  borderColor: 'grey',
                }}
                src={userImg}
              />
              {/* <span className="d-none d-md-inline">{user.displayName || user.email}</span> */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} href="/profile">
                My Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/settings">
                Settings
              </Dropdown.Item>
              <div className="px-3 py-2 me-auto">
                <ThemeToggle />
              </div>

              {/* <Dropdown.Item onClick={toggleTheme}>{theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}</Dropdown.Item> */}

              <Dropdown.Divider />

              <Dropdown.Item onClick={signOut} className="text-danger d-flex align-items-center gap-2">
                <FiLogOut /> Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          'no'
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
