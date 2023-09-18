import BrightCard from "@/components/BrightCard";
import Link from "next/link";

function Earnings() {
  return (
    <Link href="/earnings" className="w-full ">
      <BrightCard>
        <h1 className="text-5xl pt-10 pb-2">2,000 DA</h1>
        <h3 className="text-lg pt-4 pb-2">withdraw on 18/07</h3>
      </BrightCard>
    </Link>
  );
}

export default Earnings;
