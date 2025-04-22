import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - Contributors',
  icons: {
    icon: '/images/org-favicon.png',
  },
};

export default function ContributorsLayout({ children }) {
  return <div>{children}</div>;
}

ContributorsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
