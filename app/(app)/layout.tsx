import Image from "next/image";
import BottomNav from "./BottomNav";
import Header from "./Header";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "../providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-backgroundWhite  w-full h-full flex-col items-center pt-8 gap-4 px-4">
      <Header />
      {children}
      <div className="h-16"></div>
      <BottomNav />
    </div>
  );
}
