export default function SurveyCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" text-lightGrey rounded-xl border-2 font-semibold   flex  justify-between  my-1 py-4  px-4 w-full active:opacity-80">
      {children}
    </div>
  );
}
