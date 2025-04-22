import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - About',
  icons: {
    icon: '/images/org-favicon.png',
  },
};

export default function AboutLayout({ children }) {
  return <div>{children}</div>;
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
