'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/context/authContext';
import { getUsersByUid } from '@/api/userData';
import Loading from '@/components/Loading';
import SignIn from '@/components/SignIn';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function ViewDirectorBasedOnUserAuthStatus({ children }) {
  const { user, userLoading } = useAuth();
  const router = useRouter();
  const [checkBackend, setCheckBackend] = useState(true);

  useEffect(() => {
    if (!userLoading && user && checkBackend) {
      getUsersByUid(user.uid)
        .then((existingUser) => {
          console.log(existingUser);
          if (!existingUser) {
            router.replace('/create-profile');
          } else {
            setCheckBackend(false);
          }
        })
        .catch((bug) => {
          console.error(bug);
          setCheckBackend(false);
        });
    } else if (!user && !userLoading) {
      setCheckBackend(false);
    }
  }, [user, userLoading, checkBackend, router]);

  if (userLoading || checkBackend) return <Loading />;

  if (user) {
    return (
      <>
        <NavBar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </>
    );
  }

  return <SignIn />;
}

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewDirectorBasedOnUserAuthStatus;
