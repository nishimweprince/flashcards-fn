import Navbar from '@/components/Navbar';
import './globals.scss';
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Providers } from '@/states/provider';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Nishimwe Flashcards',
  description: 'Landing Page for Nishimwe Flashcards',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[90%] mx-auto">
        {' '}
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
