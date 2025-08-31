// app/layout.js (updated)
// app/layout.js

import { Poppins } from 'next/font/google';
import './globals.css';
import ThreeJSBackground from '@/components/ThreeJSBackground';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Romy (Xiao Ro) - Portfolio',
  description: 'Front-End Web Developer & Games Creator',
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-gray-900 text-white font-poppins min-h-screen">
        <ThreeJSBackground />
        {children}
      </body>
    </html>
  );
}