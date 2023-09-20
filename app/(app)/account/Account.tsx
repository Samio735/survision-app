"use client";
import BrightCard from "@/components/BrightCard";
import Card from "@/components/Card";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Account() {
  const { user, isLoaded } = useUser();
  return (
    <div className="w-full">
      {!isLoaded && "Loading..."}
      {
        <>
          <Card>
            <h1 className="mb-2 text-lightGrey">Name</h1>
            <p className="text-xl">
              {user?.firstName} {user?.lastName}
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
            <p className="text-xl">
              {user?.emailAddresses.at(0)?.emailAddress}
            </p>
          </Card>
          <BrightCard>
            <div className="w-full flex justify-between">
              <p> Edit </p> <UserButton afterSignOutUrl="/"></UserButton>
            </div>
          </BrightCard>
        </>
      }
    </div>
  );
}
