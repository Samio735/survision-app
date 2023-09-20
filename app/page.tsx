import { redirect } from "next/navigation";

function page() {
  redirect("/home");
  return <></>;
}

export default page;
