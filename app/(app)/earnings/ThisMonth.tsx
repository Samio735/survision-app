"use client";
import { checkLogin } from "@/app/functions";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThisMonth() {
  const [earnings, setEarnings] = useState(0);
  const router = useRouter();
  useEffect(() => {
    checkLogin()
      .then((data) => {
        if (data.credit) {
          setEarnings(data.credit);
        }
      })
      .catch((error) => {
        console.log(error);
        router.push("/sign-in");
      });
  });
  return (
    <Card className="w-full p-2">
      <h1 className="text-xl mb-2 text-lightGrey">This Month</h1>
      <p className="text-5xl mb-4">{earnings} DA</p>
    </Card>
  );
}
