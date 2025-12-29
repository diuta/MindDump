"use client";

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
    <div
      className="flex flex-col gap-4 min-h-screen min-w-fit p-10 bg-stone-50"
      id="pagewrapper"
    >
      <div className="flex justify-center flex-row gap-2" id="header">
        <div className="text-2xl">Welcome</div>
        <div className="text-2xl font-bold">
          {user.user_metadata?.display_name}
        </div>
      </div>
    </div>
  );
}
