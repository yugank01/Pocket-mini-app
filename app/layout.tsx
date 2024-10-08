import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: './PostGrotesk-Book.woff2' })



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
    </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
