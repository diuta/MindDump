"use client";

import { TaskCard } from "@/components/TaskCard";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <div className="flex min-h-screen flex-col items-center p-10 space-y-4 bg-stone-50">
      <div className="flex justify-center flex-row gap-2">
        <div className="text-2xl">Welcome</div>
        <div className="text-2xl font-bold">
          {user.user_metadata?.display_name}
        </div>
      </div>
    </div>
  );
}
