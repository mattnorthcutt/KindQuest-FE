'use client';

import React, { useState, useEffect } from 'react';
import { Nav, Button, Image } from 'react-bootstrap';
import { FiHome, FiUsers, FiUserCheck, FiClipboard, FiInfo, FiLogOut, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useAuth } from '@/utils/context/authContext';
import { signOut } from '@/utils/auth';
import { CgProfile } from 'react-icons/cg';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  const [userImg, setUserImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setUserImg(user?.photoURL || '/images/default-avatar.png');
  }, [user?.photoURL]);

  // split(' '): breaks "john doe" -> ['Matt', 'Northcutt']
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

  return (
    <div className={`side-navbar ${isOpen ? 'open' : ''}`} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="dark" className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiArrowLeft /> : <FiArrowRight />}
      </Button>

      {isOpen && (
        <div className="sidebar-content">
          {user && (
            <div className="profile d-flex flex-column align-items-center mb-4">
              <Image src={userImg} roundedCircle width={60} height={60} alt="User Avatar" />
              <div className="text-white mt-2">{capitalizeName(user.displayName)}</div>
              <Link href="/profile" className="nav-link d-flex align-items-center gap-2">
                <CgProfile /> Profile
              </Link>
            </div>
          )}

          <Nav className="flex-column px-3">
            <Nav.Item>
              <Link href="/" className="nav-link d-flex align-items-center gap-2">
                <FiHome /> Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/organizations" className="nav-link d-flex align-items-center gap-2">
                <FiUsers /> Organizations
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/volunteers" className="nav-link d-flex align-items-center gap-2">
                <FiUserCheck /> Volunteers
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/projects" className="nav-link d-flex align-items-center gap-2">
                <FiClipboard /> Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/about-us" className="nav-link d-flex align-items-center gap-2">
                <FiInfo /> About
              </Link>
            </Nav.Item>
          </Nav>

          <div className="px-3 mt-2 mb-2">
            <div className="px-3 mt-3 m-0">
              <ThemeToggle />
            </div>
            <Button variant="outline-danger" onClick={signOut} className="w-100">
              <FiLogOut /> Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
