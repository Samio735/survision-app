import BrightCard from "@/components/BrightCard";
import SurveyCard from "@/app/(app)/surveys/SurveyCard";
import Link from "next/link";
import SurveyItem from "./SurveyItem";
import Guide from "./GuideBtn";
import GuideBtn from "./GuideBtn";
import SurveysList from "./SurveysList";

function page() {
  return (
    <>
      <GuideBtn />
      <SurveysList />
    </>
  );
}

export default page;
