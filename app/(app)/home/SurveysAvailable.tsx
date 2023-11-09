"use client";
import { getSurveys } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import { Survey } from "@/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function SurveysAvailable() {
  const surveysNumRef = useRef<number>(0);
  const [surveys, setSurveys] = useState<Survey[]>([]);
  useEffect(() => {
    getSurveys().then((data: Survey[] | undefined) => {
      if (data) {
        surveysNumRef.current = data.length;
      }
      setSurveys(data || []);
    });
  }, []);
  const surveysNum = surveysNumRef.current;

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
