"use client";
import { checkLogin } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import Card from "@/components/Card";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    checkLogin()
      .then((data) => {
        if (data.email) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.log(error);
        router.push("/sign-in");
      });
  });

  return (
    <div className="w-full">
      {
        <>
          <Card>
            <h1 className="mb-2 text-lightGrey">Name</h1>
            <p className="text-xl">
              {user?.first_name} {user?.last_name}
            </p>
          </Card>
          <Card>
            <div className="flex justify-between">
              <div>
                <h1 className="mb-2 text-lightGrey">Status</h1>
                <p className="text-xl">Not Verified</p>
              </div>
              <div className="flex items-center pe-1">
                <Link href="/account/verify">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99471 22.0106L12.0051 12.0002L1.99471 1.98975"
                      stroke="#0D1727"
                      stroke-width="3.33681"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
          <Card>
            <h1 className="mb-2 text-lightGrey">Email</h1>
            <p className="text-xl">{user?.email}</p>
          </Card>
          <Link href="/sign-in">
            <BrightCard>
              <div className="w-full flex justify-between">
                <p> Logout </p>
              </div>
            </BrightCard>
          </Link>
        </>
      }
    </div>
  );
}
