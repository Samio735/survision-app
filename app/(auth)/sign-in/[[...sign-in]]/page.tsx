import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}

// "use client";
// import BrightCard from "@/components/BrightCard";
// import { Input } from "@nextui-org/react";
// import Link from "next/link";

// export default function page() {
//   return (
//     <>
//       {" "}
//       <Input
//         type="email"
//         label="Email "
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Input
//         type="password"
//         label="Password "
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Link
//         href={"/reset-password"}
//         className="w-full p-4 text-lighOrange underline"
//       >
//         <p>Forgot your password?</p>
//       </Link>
//       <Link href={"/home"} className="w-full">
//         <BrightCard>
//           <p className="-my-2">Login</p>
//         </BrightCard>
//       </Link>
//     </>
//   );
// }
