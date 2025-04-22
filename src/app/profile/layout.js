import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - Profile',
  icons: {
    icon: '/images/default-avatar.png',
  },
};

export default function ProfileLayout({ children }) {
  return <div>{children}</div>;
}

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
