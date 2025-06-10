import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kyosukeimura.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Kyosuke Imura',
    template: '%s | Kyosuke Imura',
  },
  description: 'Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html 
    lang="en"
    className={`${inter.className} [scrollbar-gutter:stable]`}
    >
      <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 ">
            <main className="max-w-[100ch] mx-auto w-full space-y-4">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
    </html>
    </ViewTransitions>
  );
}
function Footer() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kyosuke-imura/' },
    { name: 'Resume', url: 'https://drive.google.com/file/d/1jg5nDfykY3Y0cYtQKn_-dAX_QY9S5Y_X/view?usp=sharing' },
    { name: 'GitHub', url: 'https://github.com/kyoimura' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-gray-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}




