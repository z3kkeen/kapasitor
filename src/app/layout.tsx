'use client'
import "./globals.css";
import { App, KonstaProvider } from 'konsta/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <KonstaProvider >
          <App theme="material">{children}</App>
        </KonstaProvider>
      </body>
    </html>
  );
}
