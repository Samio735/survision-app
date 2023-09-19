export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full gap-2 p-4 flex flex-col items-center">
      {children}
    </div>
  );
}
