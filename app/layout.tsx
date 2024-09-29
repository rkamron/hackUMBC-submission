import type { Metadata } from "next";
import "./globals.css";
import { Route } from "react-router-dom";

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