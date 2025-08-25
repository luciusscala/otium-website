import { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Otium - The Cursor for DevOps Engineers',
  description: 'Transform Linux system administration through intelligent automation. AI-powered platform that understands natural language requests and executes complex DevOps tasks automatically.',
  keywords: 'DevOps, Linux, automation, AI, system administration, infrastructure, nginx, ssl, deployment',
  authors: [{ name: 'Otium Technology' }],
  openGraph: {
    title: 'Otium - The Cursor for DevOps Engineers',
    description: 'Transform Linux system administration through intelligent automation.',
    type: 'website',
    url: 'https://otium.tech',
    siteName: 'Otium',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otium - The Cursor for DevOps Engineers',
    description: 'Transform Linux system administration through intelligent automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black text-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
