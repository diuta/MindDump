"use client"; // Note: Simplified for the demo, or keep as Server Component and use usePathname in a client wrapper

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body className="antialiased flex items-start justify-between h-screen bg-white">
        {!isAuthPage && <Sidebar />}
        <main className="h-full w-full overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}