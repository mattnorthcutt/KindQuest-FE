import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - Volunteers',
  icons: {
    icon: '/images/volfavicon.png',
  },
};

export default function VolunteersLayout({ children }) {
  return <div>{children}</div>;
}

VolunteersLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
