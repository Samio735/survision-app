import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
// "use client";
// import BrightCard from "@/components/BrightCard";
// import { Checkbox, Input } from "@nextui-org/react";
// import Link from "next/link";

// export default function page() {
//   return (
//     <>
//       {" "}
//       <Input
//         type="text"
//         label="First Name"
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Input
//         type="text"
//         label="Family Name"
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Input
//         type="email"
//         label="Email"
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Input
//         type="number"
//         label="Phone Number"
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <Input
//         type="password"
//         label="Password "
//         classNames={{ inputWrapper: "bg-backgroundWhite" }}
//       />
//       <div className="w-full flex flex-col gap-2 p-4  ">
//         <Checkbox color="warning" radius="full" defaultChecked>
//           <p className="text-sm">I agree on receiving emails and sms</p>
//         </Checkbox>
//         <Checkbox radius="full" color="warning">
//           {" "}
//           <p className="text-sm">
//             {" "}
//             I agree on{" "}
//             <span className="text-lighOrange underline">
//               <Link href={"/policy"}>Privacy Policy and Laws</Link>
//             </span>{" "}
//           </p>
//         </Checkbox>
//       </div>
//       <Link href={"/home"} className="w-full">
//         <BrightCard>
//           <p className="-my-2">Sign up</p>
//         </BrightCard>
//       </Link>
//     </>
//   );
// }
