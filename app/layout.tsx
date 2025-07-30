import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Otium',
  description: 'Transform Linux system administration through intelligent automation. AI-powered platform that understands natural language requests and executes complex DevOps tasks automatically.',
  keywords: 'DevOps, Linux, automation, AI, system administration, infrastructure',
  authors: [{ name: 'Otium Technology' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
