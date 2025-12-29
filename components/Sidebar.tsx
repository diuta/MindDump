"use client"; // Required for interactivity and hooks

import React from 'react';
import Useritems from './Useritems';
import Menu from './Menu';
import { supabase } from "@/lib/supabase"; // Import your supabase client
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error logging out:", error.message);
      alert(error.message);
    } else {
      // Redirect to login page and refresh to clear any server-side state
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <div className='w-xs border-r min-h-screen p-4 flex flex-col bg-neutral-900 gap-4 text-white border-neutral-800'>
      <Useritems />
      <Menu />
      <button 
        onClick={handleLogout}
        className="text-left hover:text-red-400 transition-colors cursor-pointer mt-auto"
      >
        Log Out
      </button>
    </div>
  );
}