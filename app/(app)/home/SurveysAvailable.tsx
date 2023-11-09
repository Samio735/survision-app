import { getSurveys } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import Link from "next/link";

async function SurveysAvailable() {
  let surveysNum = 0;
  const data = await getSurveys();
  if (data) {
    surveysNum = data.length;
  }

  return (
    <Link href="/surveys" className="w-full">
      <BrightCard>
        <div className="flex w-full justify-between">
          <h1 className="text-lg ">Surveys available</h1>
          <h3 className="text-lg ">{surveysNum}</h3>
        </div>
      </BrightCard>
    </Link>
  );
}

export default SurveysAvailable;
