"use client";
import { redirect } from "next/navigation";
import { checkLogin } from "./functions";
import { useEffect, useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState("");
  useEffect(() => {
    try {
      checkLogin()
        .then((data) => {
          console.log(data);
          if (data.email) {
            setSuccess("true");
          } else {
            setSuccess("false");
          }
        })
        .catch((error) => {
          console.log(error);
          setSuccess("false");
        });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(success);
      if (success == "false") {
        redirect("/sign-in");
      }
      if (success == "true") {
        redirect("/home");
      }
    }
  }, [success]);

  return <></>;
}
