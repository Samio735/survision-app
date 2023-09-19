import BrightCard from "@/components/BrightCard";
import Link from "next/link";

function SurveysAvailable() {
  return (
    <Link href="/surveys" className="w-full">
      <BrightCard>
        <div className="flex w-full justify-between">
          <h1 className="text-lg ">Surveys available</h1>
          <h3 className="text-lg ">3</h3>
        </div>
      </BrightCard>
    </Link>
  );
}

export default SurveysAvailable;
