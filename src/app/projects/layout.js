import PropTypes from 'prop-types';

export const metadata = {
  title: 'KindQuest - Projects',
  icons: {
    icon: '/images/org-favicon.png',
  },
};

export default function ProjectsLayout({ children }) {
  return <div>{children}</div>;
}

ProjectsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
