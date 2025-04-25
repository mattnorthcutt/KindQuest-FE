import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - Organizations',
  icons: {
    icon: '/images/orgfavicon.ico',
  },
};

export default function OrganizationsLayout({ children }) {
  return <div>{children}</div>;
}

OrganizationsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
