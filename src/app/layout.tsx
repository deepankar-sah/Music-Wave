import "./globals.css";

import type { Metadata } from "next";

import Sidebar from "../components/sidebar";
import Player from "@/components/player";

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
        <div className="w-full max-h-[100%] flex flex-row space-x-3 space-y">
          <Sidebar />
          <div className="w-full max-h-full"> {children} </div>
        </div>
        <Player />
      </body>
    </html>
  );
}
