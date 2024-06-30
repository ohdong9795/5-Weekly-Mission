import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/components/common/QueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <div id='modal-root' />
      </body>
    </html>
  );
}
