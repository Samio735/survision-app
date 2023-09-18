import Link from "next/link";
import SurveyItem from "./SurveyItem";

export default function SurveysList() {
  const data = [
    {
      name: "Survey 1",
      description: "Description 1",
      id: 1,
      availableResponses: 10,
      allResponses: 20,
      duration: 10,
      price: 100,
    },
    {
      name: "Survey 2",
      description: "Description 2",
      id: 2,
      availableResponses: 10,
      allResponses: 20,
      duration: 10,
      price: 100,
    },
    {
      name: "Survey 3",
      description: "Description 3",
      id: 3,
      availableResponses: 10,
      allResponses: 20,
      duration: 10,
      price: 100,
    },
    {
      name: "Survey 4",
      description: "Description 4",
      id: 4,
      availableResponses: 10,
      allResponses: 20,
      duration: 10,
      price: 100,
    },
  ];
  return (
    <>
      {data.map((survey) => (
        <SurveyItem
          id={survey.id}
          key={survey.id}
          name={survey.name}
          availableResponses={survey.availableResponses}
          allResponses={survey.allResponses}
          duration={survey.duration}
          price={survey.price}
        />
      ))}
    </>
  );
}
