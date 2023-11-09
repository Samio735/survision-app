"use client";
import SurveyItem from "./SurveyItem";
import { useEffect, useState } from "react";
import { Survey } from "../../../types";
import { BACKEND_URL } from "../../constants";
import { checkLogin, getSurveys } from "@/app/functions";
import { useRouter } from "next/navigation";
export default function SurveysList() {
  const [data, setData] = useState<Survey[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  useEffect(() => {
    checkLogin()
      .then((data) => {
        if (data.earnings) {
        }
      })
      .catch((error) => {
        console.log(error);
        router.push("/sign-in");
      });
  });
  useEffect(() => {
    try {
      getSurveys().then((data) => {
        setData(data);
        setLoading(false);
      });
    } catch (error) {
      setError(true);
    }
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.map((survey) => (
            <SurveyItem key={survey.id} survey={survey} />
          ))}
        </>
      )}
    </>
  );
}
