"use client";
import { login, signUP } from "@/app/functions";
import BrightCard from "@/components/BrightCard";
import { Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  return (
    <>
      {" "}
      <Input
        type="text"
        label="First Name"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        label="Last Name"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="email"
        label="Email"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <Input
        type="number"
        label="Phone Number"
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
      /> */}
      <Input
        type="password"
        label="Password "
        classNames={{ inputWrapper: "bg-backgroundWhite" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="w-full flex flex-col gap-2 p-4  ">
        <Checkbox color="warning" radius="full" defaultChecked>
          <p className="text-sm">I agree on receiving emails and sms</p>
        </Checkbox>
        <Checkbox radius="full" color="warning">
          {" "}
          <p className="text-sm">
            {" "}
            I agree on{" "}
            <span className="text-lighOrange underline">
              <Link href={"/policy"}>Privacy Policy and Laws</Link>
            </span>{" "}
          </p>
        </Checkbox>
      </div>
      <p className="text-center text-sm text-lighOrange">{status}</p>
      <button
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          signUP(firstName, lastName, email, password).then((data) => {
            if (data.email) {
              setStatus("Account Created Successfully");
              router.push("/sign-in");
            } else {
              setStatus("Something went wrong");
            }
            login(email, password).then((data) => {
              if (data.jwt) {
                setStatus("You're loged in !");
              } else {
                setStatus("Login not successfull");
              }
            });
          });
        }}
      >
        <BrightCard>
          <p className="-my-2">Sign up</p>
        </BrightCard>
        <div className="h-6"></div>
        <Link href="/sign-in" className="pt-8">
          <p className=" text-md py-2 text-lighOrange underline">
            Already have an account? login !
          </p>
        </Link>
      </button>
    </>
  );
}
