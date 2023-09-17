function NavBtn({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <button
      type="button"
      className={`inline-flex flex-col w-full h-full items-center justify-center px-5 hover:bg-gray-50 group
      ${isSelected ? "stroke-lighOrange" : "stroke-lightGrey"}`}
    >
      {children}
    </button>
  );
}

export default NavBtn;
