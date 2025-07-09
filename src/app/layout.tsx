import "./globals.css";
import type { Metadata } from "next";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata: Metadata = {
  title: "MusicWave 🎵",
  description: "Full-featured Next.js music player app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
