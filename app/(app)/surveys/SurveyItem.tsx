import Link from "next/link";
import SurveyCard from "./SurveyCard";

export default function SurveyItem({
  id,
  name,
  availableResponses,
  allResponses,
  duration,
  price,
}: {
  id: number;
  name: string;
  availableResponses: number;
  allResponses: number;
  duration: number;
  price: number;
}) {
  return (
    <Link href={`/surveys/${id}`} className="w-full">
      <SurveyCard>
        <div>
          <p className="text-xl text-black mb-1">{name}</p>
          <p className="mb-1">
            {" "}
            {availableResponses}/{allResponses} responses available
          </p>
          <div className="flex gap-8">
            <p>{duration}min</p>
            <div className="flex">
              <p> {price} DA/ </p>
              <svg
                className="mt-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 14V12.6667C13.3332 11.9594 13.0522 11.2811 12.5521 10.781C12.052 10.281 11.3737 10 10.6665 10H5.33317C4.62593 10 3.94765 10.281 3.44755 10.781C2.94746 11.2811 2.6665 11.9594 2.6665 12.6667V14"
                  stroke="#5F646C"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00016 7.33382C9.47292 7.33382 10.6668 6.13991 10.6668 4.66716C10.6668 3.1944 9.47292 2.00049 8.00016 2.00049C6.5274 2.00049 5.3335 3.1944 5.3335 4.66716C5.3335 6.13991 6.5274 7.33382 8.00016 7.33382Z"
                  stroke="#5F646C"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center pe-1">
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99471 22.0106L12.0051 12.0002L1.99471 1.98975"
              stroke="#0D1727"
              stroke-width="3.33681"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </SurveyCard>
    </Link>
  );
}
