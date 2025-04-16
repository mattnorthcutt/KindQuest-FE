// app/layout.js
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import ClientProvider from '@/utils/context/ClientProvider';
import ThemeWrapper from '@/components/ThemeWrapper';
import { ThemeProvider } from '@/utils/context/ThemeContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// ✅ Fixed generateMetadata function
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  return {
    title: `KindQuest - ${slug || 'HOME'}`,
    description: `This is a dynamically generated description for ${slug}.`,
    keywords: [slug, 'dynamic', 'page'],
    openGraph: {
      title: `Open Graph Title for ${slug}`,
      description: `Open Graph Description for ${slug}`,
      url: `https://yourwebsite.com/${slug}`,
    },
  };
};
