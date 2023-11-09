import BrightCard from "@/components/BrightCard";
import Card from "@/components/Card";
import Link from "next/link";
import ThisMonth from "./ThisMonth";

function page() {
  return (
    <>
      <ThisMonth />
      <Card>
        <h1 className="text-xl mb-2 text-lightGrey">All Time</h1>
        <p className="text-2xl mb-1">920,000 DA</p>
      </Card>
      <Card>
        <h1 className="text-xl mb-1 text-lightGrey">Average Per Month</h1>
        <p className="text-2xl mb-1">75,000 DA</p>
      </Card>
      <Card>
        <h1 className="text-xl mb-1 text-lightGrey">Waiting</h1>
        <p className="text-2xl mb-1">23,000 DA</p>
      </Card>
      <Link href="/earnings/withdraw" className="w-full">
        <BrightCard>
          <p className="-my-1">Withdraw</p>
        </BrightCard>
      </Link>
    </>
  );
}

export default page;
