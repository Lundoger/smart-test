import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import StoreProvider from '@/components/providers/StoreProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Smart test task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={clsx(inter.className, 'bg-bgPrimary text-textPrimary')}
        >
          <div className="wrapper font-inter">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
