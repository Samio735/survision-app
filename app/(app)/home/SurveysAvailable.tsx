"use client";
import { getSurveys } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import Link from "next/link";
import { useEffect, useState } from "react";

function SurveysAvailable() {
  let surveysNum = 0;
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    getSurveys().then((data) => {
      if (data) {
        surveysNum = data.length;
      }
      setSurveys(data);
    });
  }, []);

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
