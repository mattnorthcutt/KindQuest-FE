'use client';

import { useAuth } from '@/utils/context/authContext';

export default function ProfilePage() {
  const { user } = useAuth();

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

  return (
    <div className="fade-in" style={{ margin: '20px auto', maxWidth: '600px', textAlign: 'center' }}>
      <img src={user.photoURL} alt="profile images" style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{capitalizeName(user.displayName)}</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>{user.email}</p>
      <h2 style={{ marginTop: '30px', fontSize: '1.8rem', textDecoration: 'underline' }}>My Projects</h2>
      <p style={{ marginTop: '10px', color: '#999' }}>This is where your projects will appear in the future.</p>
    </div>
  );
}
