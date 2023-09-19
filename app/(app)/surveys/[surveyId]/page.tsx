import { Progress } from "@nextui-org/progress";
import Choice from "./Choice";

export default function page() {
  return (
    <div className="absolute w-screen bg-backgroundWhite pt-4 pb-8 px-4">
      <div className="flex justify-between items-center">
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 17.5L2 9.75L9.75 2"
            stroke="black"
            stroke-width="2.58333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="text-2xl">Drinks Necesity</h1>
      </div>
      <div className="my-4 mt-8">
        <Progress
          aria-label="Loading..."
          value={60}
          size="lg"
          classNames={{
            indicator: "bg-gradient-to-r from-lighOrange to-darkOrange",
            track: "bg-[#FFF7F2] border border-darkOrange border-2 h-4 ",
          }}
        />
      </div>
      <h2 className="text-xl py-2 mb-8">
        When you hear cola which brand get in mind first ?
      </h2>
      <div className="flex flex-col gap-4">
        <Choice name="Coca cola" />
        <Choice name="wqf" />
        <Choice name="wqf" />
        <Choice name="wqf" />
        <Choice name="wqf" />
      </div>
    </div>
  );
}
