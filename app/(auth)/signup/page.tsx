"use client";
import BrightCard from "@/components/BrightCard";
import { Input } from "@nextui-org/react";
import Link from "next/link";

export default function page() {
  return (
    <>
      {" "}
      <Input
        type="text"
        label="First Name"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      />
      <Input
        type="text"
        label="Family Name"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      />
      <Input
        type="email"
        label="Email"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      />
      <Input
        type="number"
        label="Phone Number"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      />
      <Input
        type="password"
        label="Password "
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      />
      <Link
        href={"/reset-password"}
        className="w-full p-4 text-lighOrange underline"
      >
        <p>Forgot your password?</p>
      </Link>
      <Link href={"/home"} className="w-full">
        <BrightCard>
          <p className="-my-2">Sign up</p>
        </BrightCard>
      </Link>
    </>
  );
}
