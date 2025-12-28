"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Useritems() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Listen for changes (Login/Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!user) return null;

  const displayName = user.user_metadata?.display_name || user.email;
  const avatarUrl = user.user_metadata?.avatar_url;
  const initials = displayName?.substring(0, 2).toUpperCase() || "??";

  return (
    <div className="flex items-center gap-4 border rounded-[10px] p-4 border-solid border-neutral-800">
      <Avatar className="h-10 w-10 border border-neutral-700">
        <AvatarImage src={avatarUrl} alt={displayName} />
        <AvatarFallback className="bg-neutral-700 text-white font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="overflow-hidden">
        <div className="text-sm font-medium truncate text-white">{displayName}</div>
        <div className="text-xs text-neutral-400 truncate">{user.email}</div>
      </div>
    </div>
  );
}