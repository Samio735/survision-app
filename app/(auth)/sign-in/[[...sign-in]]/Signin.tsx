"use client";
import { checkLogin, login } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import { Input } from "@nextui-org/react";
import { set } from "lodash";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="w-full flex flex-col gap-6">
      <Input
        type="email"
        label="Email "
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Password "
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Link
          href={"/reset-password"}
          className="w-full p-4 text-lighOrange underline"
        >
          <p>Forgot your password?</p>
        </Link> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setStatus("");
          setError("");
          try {
            login(email, password).then((data) => {
              if (data.jwt) {
                setStatus("Sucess !");
                router.push("/home");
              } else {
                setError("Login not successfull");
              }
            });
          } catch (error) {
            setError("Login not successfull");
          } finally {
            if (status == "Sucess !") {
              console.log("Sucess !");
            }
          }
        }}
      >
        <p className="text-center text-sm text-red-600">{error}</p>
        <p className="text-center text-sm text-green-600">{status}</p>

        <BrightCard>
          <p className="-my-1">Login</p>
        </BrightCard>
        <div className="h-6"></div>
        <Link href="/sign-up" className="pt-8">
          <p className=" text-md py-2 text-lighOrange underline">
            Don't have an account? Sign up !
          </p>
        </Link>
      </button>
    </div>
  );
}
