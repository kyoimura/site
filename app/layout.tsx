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
          {children}
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}




