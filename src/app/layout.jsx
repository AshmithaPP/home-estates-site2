import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Ajay Homes & Estates',
  description: "Chennai's Fastest Growing Construction Firm - Ajay Homes & Estates",
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="text-[#f0ede8] antialiased overflow-x-hidden selection:bg-[#ff8c00] selection:text-black"
        style={{
          background: 'linear-gradient(160deg, #1e1e1e 0%, #2c2c2c 40%, #383838 70%, #2a2a2a 100%)',
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
