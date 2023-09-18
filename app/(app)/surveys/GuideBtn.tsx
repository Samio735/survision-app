import BrightCard from "@/components/BrightCard";
import Link from "next/link";

export default function GuideBtn() {
  return (
    <Link href={"/guide"} className="w-full">
      <BrightCard>
        <p className="-my-2">General Guide</p>
      </BrightCard>
    </Link>
  );
}
