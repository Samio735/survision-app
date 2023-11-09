"use client";
import { checkLogin } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Earnings() {
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
    <Link href="/earnings" className="w-full ">
      <BrightCard>
        <h1 className="text-5xl pt-10 pb-2">{earnings} DA</h1>
        <h3 className="text-lg pt-4 pb-2">withdraw on 18/07</h3>
      </BrightCard>
    </Link>
  );
}

export default Earnings;
