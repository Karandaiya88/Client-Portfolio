import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay Panwar | Assistant Sales Manager",
  description: "Professional Sales Portfolio — Saint-Gobain | Building Materials | Channel Sales | Western Rajasthan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#080f1e", fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
