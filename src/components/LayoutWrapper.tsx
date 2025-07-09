"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import Player from "./player";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // This route will not show sidebar
  const noLayoutRoutes = ["/login"];

  const showLayout = !noLayoutRoutes.includes(pathname);

  if (!showLayout) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <>
      <div className="w-full max-h-[100%] flex flex-row space-x-3 space-y-0">
        <Sidebar />
        <div className="w-full max-h-full">{children}</div>
      </div>
      <Player />
    </>
  );
}
