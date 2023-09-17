import Image from "next/image";
import BottomNav from "./BottomNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-between p-24">
      {children}
      <BottomNav />
    </div>
  );
}
