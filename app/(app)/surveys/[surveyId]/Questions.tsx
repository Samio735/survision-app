// "use client";
// import { Progress } from "@nextui-org/react";
// import ChoiceBtn from "./ChoiceBtn";
// import { Choice } from "@/types";
// import { useEffect, useState } from "react";
// import {
//   checkLogin,
//   finishSurvey,
//   getChoices,
//   getQuestions,
// } from "@/app/functions";
// import BrightCard from "@/components/BrightCard";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Questions({ surveyID }: { surveyID: string }) {
//   const [questions, setQuestions] = useState(["", ""]);
//   const [questionNumber, setQuestionNumber] = useState(0);
//   let question: any = questions?.[questionNumber];
//   const [choices, setChoices] = useState<Choice[] | undefined>([]);
//   const router = useRouter();
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     checkLogin()
//       .then((data) => {
//         console.log(data);
//         if (data.email !== "") {
//           console.log("set");
//           setUser(data);
//         } else {
//           router.push("/sign-in");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         router.push("/sign-in");
//       });
//   }, []);
//   useEffect(() => {
//     try {
//       getQuestions(surveyID).then((data) => {
//         setQuestions(data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, [surveyID]);
//   useEffect(() => {
//     try {
//       if (question?.id) {
//         getChoices(question.id).then((data) => {
//           setChoices(data);
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, [questionNumber, question?.id, questions]);
//   useEffect(() => {
//     if (questionNumber === questions.length) {
//       if (user) {
//         finishSurvey(surveyID).then((data) => {
//           if (data.id) {
//             setUser(data);
//           }
//         });
//       }
//     }
//   }, [questionNumber]);
//   return (
//     questions && (
//       <>
//         <div className="my-4 mt-8">
//           <Progress
//             aria-label="Loading..."
//             value={
//               questions?.length > 0
//                 ? (questionNumber / questions.length) * 100
//                 : 0
//             }
//             size="lg"
//             classNames={{
//               indicator: "bg-gradient-to-r from-lighOrange to-darkOrange",
//               track: "bg-[#FFF7F2] border border-darkOrange border-2 h-4 ",
//             }}
//           />
//         </div>

//         {questionNumber === questions.length && (
//           <div className="p-4 my-12 text-xl text-center">
//             Thank you for your participation! <br />
//             <br />
//             <Link href="/surveys" onClick={() => setQuestionNumber(0)}>
//               <BrightCard>
//                 <h1 className="text-lg ">Return To Surveys</h1>
//               </BrightCard>
//             </Link>
//           </div>
//         )}
//         {questions && question ? (
//           <>
//             <h2 className="text-xl py-2 mb-8">
//               {questionNumber + 1}. {question.text}
//             </h2>
//             <div className="flex flex-col gap-4">
//               {choices ? (
//                 choices.map((choice, index) => (
//                   <ChoiceBtn
//                     key={choice.id}
//                     choice={choice}
//                     number={index}
//                     surveyID={surveyID}
//                     questionID={question?.id}
//                     setQuestionNumber={setQuestionNumber}
//                     user={user}
//                   />
//                 ))
//               ) : (
//                 <div></div>
//               )}
//             </div>
//           </>
//         ) : (
//           <div></div>
//         )}
//       </>
//     )
//   );
// }
