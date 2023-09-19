import BrightCard from "@/components/BrightCard";
import Card from "@/components/Card";
import Link from "next/link";

function page() {
  return (
    <>
      <Card>
        <h1 className="mb-2 text-lightGrey">Name</h1>
        <input
          className="text-xl p-2 appearance-none outline-none placeholder:text-lightGrey focus:placeholder:opacity-0 placeholder:transition-opacity duration-50 ease-in-out bg-backgroundWhite border-2  rounded-lg"
          placeholder="Samy Rahim"
        />
      </Card>

      <Card>
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2 text-lightGrey focus-within::border-yellow-300">
              Status
            </h1>
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
        <input
          className="text-xl p-2 appearance-none outline-none placeholder:text-lightGrey focus:placeholder:opacity-0 placeholder:transition-opacity duration-50 ease-in-out bg-backgroundWhite border-2  rounded-lg"
          placeholder="s_rahim@estin.dz"
        />{" "}
      </Card>
      <Card>
        <h1 className="mb-2 text-lightGrey">Phone</h1>
        <input
          className="text-xl p-2 appearance-none outline-none placeholder:text-lightGrey focus:placeholder:opacity-0 placeholder:transition-opacity duration-50 ease-in-out bg-backgroundWhite border-2  rounded-lg"
          placeholder="+213 555 555 555"
        />{" "}
      </Card>
      <Card>
        <h1 className="mb-2 text-lightGrey">Address</h1>
        <input
          className="text-xl p-2 appearance-none outline-none placeholder:text-lightGrey focus:placeholder:opacity-0 placeholder:transition-opacity duration-50 ease-in-out bg-backgroundWhite border-2  rounded-lg"
          placeholder="Boumerdes, Algeria"
        />{" "}
      </Card>
      <Link href="/account/edit" className="w-full">
        <BrightCard>
          <p className="-my-1">Confirm</p>
        </BrightCard>
      </Link>
    </>
  );
}

export default page;
