import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className="text-2xl mt-8">
        Welcome to the survision collectors app guide !
      </h1>
      <p className="text-lightGrey font-medium ">
        In this video we will walk you through what this survey is about, the
        taget demography and how to handle the questions.
      </p>
      <div className="w-full h-40 relative  flex justify-center items-center">
        <Link href={"/happy"} className="z-20">
          <div className="h-12 w-20 mt-20  flex justify-center items-center rounded-xl bg-gray-100 opacity-80 z-10">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 8.5L0.499999 16.7272L0.5 0.272758L17 8.5Z"
                fill="#050505"
              />
            </svg>
          </div>
        </Link>
        <div className="absolute top-0">
          {" "}
          <img src={"/image-1.png"}></img>
        </div>
      </div>
    </>
  );
}
