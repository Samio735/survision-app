"use client";
import Link from "next/link";
import NavBtn from "./NavBtn";
import { usePathname } from "next/navigation";
import Image from "next/image";

function BottomNav() {
  const pathName = usePathname();
  return (
    <div>
      <div className="fixed bg-backgroundWhite bottom-0 left-0 z-50 w-full h-16  border-gray-200 shadow-2xl">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto gap-0 ">
          <Link
            href="/home"
            className="flex justify-center h-full w-full  mx-0 items-center"
          >
            <NavBtn isSelected={pathName == "/home"}>
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.30005 13.0504L18.35 2.90039L31.4 13.0504V29.0004C31.4 29.7695 31.0945 30.5071 30.5507 31.051C30.0068 31.5949 29.2692 31.9004 28.5 31.9004H8.20005C7.43092 31.9004 6.69329 31.5949 6.14944 31.051C5.60558 30.5071 5.30005 29.7695 5.30005 29.0004V13.0504Z"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9998 31.9004V17.4004H22.6998V31.9004"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavBtn>
          </Link>
          <Link
            href="/surveys"
            className="flex justify-center h-full  mx-0 items-center"
          >
            <NavBtn isSelected={pathName == "/surveys"}>
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2498 2.90039H9.64976C8.88063 2.90039 8.143 3.20593 7.59915 3.74978C7.05529 4.29364 6.74976 5.03126 6.74976 5.80039V29.0004C6.74976 30.5954 8.05476 31.9004 9.64976 31.9004H27.0498C27.8189 31.9004 28.5565 31.5949 29.1004 31.051C29.6442 30.5071 29.9498 29.7695 29.9498 29.0004V11.6004L21.2498 2.90039Z"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.25 4.35059V11.6006H28.5M24.15 18.8506H12.55M24.15 24.6506H12.55M15.45 13.0506H12.55"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavBtn>
          </Link>
          <Link
            href="/earnings"
            className="flex justify-center h-full w-full mx-0 items-center"
          >
            <NavBtn isSelected={pathName == "/earnings"}>
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_569)">
                  <path
                    d="M18.3499 1.4502V33.3502"
                    strokeWidth="2.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5999 7.25H14.7249C13.3789 7.25 12.0881 7.78469 11.1363 8.73643C10.1846 9.68818 9.6499 10.979 9.6499 12.325C9.6499 13.671 10.1846 14.9618 11.1363 15.9136C12.0881 16.8653 13.3789 17.4 14.7249 17.4H21.9749C23.3209 17.4 24.6117 17.9347 25.5635 18.8864C26.5152 19.8382 27.0499 21.129 27.0499 22.475C27.0499 23.821 26.5152 25.1118 25.5635 26.0636C24.6117 27.0153 23.3209 27.55 21.9749 27.55H9.6499"
                    strokeWidth="2.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_416_569">
                    <rect
                      width="34.8"
                      height="34.8"
                      fill="white"
                      transform="translate(0.949951)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavBtn>
          </Link>
          <Link
            href="/account"
            className="flex justify-center h-full w-full mx-0 items-center"
          >
            <NavBtn isSelected={pathName == "/account"}>
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9498 30.45V27.55C29.9498 26.0117 29.3387 24.5365 28.251 23.4488C27.1633 22.3611 25.688 21.75 24.1498 21.75H12.5498C11.0115 21.75 9.53625 22.3611 8.44854 23.4488C7.36083 24.5365 6.74976 26.0117 6.74976 27.55V30.45"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.35 15.9506C21.5533 15.9506 24.15 13.3538 24.15 10.1506C24.15 6.94733 21.5533 4.35059 18.35 4.35059C15.1468 4.35059 12.55 6.94733 12.55 10.1506C12.55 13.3538 15.1468 15.9506 18.35 15.9506Z"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
