
import "./globals.css";
import type { Metadata } from "next";
import { DarkModeProvider, useDarkMode } from "@/context/darkModeContext";



export const metadata: Metadata = {
  title: "MusicWave 🎵",
  description: "Full-featured Next.js music player app",
};

export default function RootLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <DarkModeProvider>
        <body className="flex flex-row">
            {sidebar}
            <div></div>
            {children}
        </body>
      </DarkModeProvider>
    </html>
  );
}
