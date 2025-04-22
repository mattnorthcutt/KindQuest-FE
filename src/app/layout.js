// app/layout.js
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import ClientProvider from '@/utils/context/ClientProvider';
import ThemeWrapper from '@/components/ThemeWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ClientProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const metadata = {
  title: 'KindQuest - Home',
  icons: {
    icon: '/images/home-icon.png',
  },
};

export function HomeLayout({ children }) {
  return <div>{children}</div>;
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
