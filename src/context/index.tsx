"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { useSession } from "next-auth/react";

import Spinner from "@/components/spinner";

import { usePathname, useRouter } from "next/navigation";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  if (session === undefined) return <Spinner />;

  if (session === null && pathname === "/create") router.push("/");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
