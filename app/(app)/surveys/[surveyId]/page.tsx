import Questions from "./Questions";
import Link from "next/link";

export default function page() {
  return (
    <div className="absolute w-screen bg-backgroundWhite pt-4 pb-8 px-4">
      {/* <div className="flex justify-between items-center">
        <Link href="/surveys">
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
        </Link>
      </div>

      <Questions surveyID={params.surveyId} /> */}
    </div>
  );
}
