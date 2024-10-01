import { PropsWithChildren, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { supabaseClient } from "../supabase/supabaseClient";
import { AuthUser } from "@supabase/supabase-js";

// bind to supabase defaults
const signUp = supabaseClient.auth.signUp.bind(supabaseClient.auth),
  signInWithPassword = supabaseClient.auth.signInWithPassword.bind(
    supabaseClient.auth,
  ),
  signInWithIdToken = supabaseClient.auth.signInWithIdToken.bind(
    supabaseClient.auth,
  ),
  signOut = supabaseClient.auth.signOut.bind(supabaseClient.auth),
  updateUser = supabaseClient.auth.updateUser.bind(supabaseClient.auth);

export interface AuthProviderValue {
  supabase: typeof supabaseClient;
  signUp: typeof signUp;
  signInWithPassword: typeof signInWithPassword;
  signInWithIdToken: typeof signInWithIdToken;
  signOut: typeof signOut;
  updateUser: typeof updateUser;
  user: AuthUser | null;
}

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateUser = async () => {
      //get current session from supabase
      const {
        data: { session },
      } = await supabaseClient.auth.getSession();

      //SetUser to session.user IF session is not null
      setUser(session?.user || null);
      setLoading(false);

      supabaseClient.auth.onAuthStateChange(async (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });
    };
    updateUser();
  }, []);

  const value: AuthProviderValue = {
    supabase: supabaseClient,
    signUp,
    signInWithPassword,
    signInWithIdToken,
    signOut,
    updateUser,
    user,
  };

  return (
    <AuthContext.Provider value={value!}>
      {/* only renders children components when the loading is complete */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
