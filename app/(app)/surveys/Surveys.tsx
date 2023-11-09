"use client";
import GuideBtn from "./GuideBtn";
import SurveysList from "./SurveysList";
import Answering from "./Answering";
import { useState } from "react";

function Surveys() {
  const [surveyId, setSurveyId] = useState("");
  return (
    <>
      <GuideBtn />
      <SurveysList setSurveyId={setSurveyId} />
      <Answering surveyId={surveyId} setSurveyId={setSurveyId} />
    </>
  );
}

export default Surveys;
