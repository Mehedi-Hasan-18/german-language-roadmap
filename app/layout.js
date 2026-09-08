import { Archivo, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { Analytics } from '@vercel/analytics/next';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-worksans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plexmono',
  display: 'swap',
});

export const metadata = {
  title: 'Sprachlabor — German Learning Console',
  description: 'Track your path from A1 to B2 German, with every resource in one instrument panel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <NavBar />
          <main className="pb-24 pt-6">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
