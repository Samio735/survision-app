import Card from "@/components/Card";
import FeedItem from "@/components/FeedItem";

const data = [
  {
    title: "New Survey : Soda Survey",
    description:
      "watch the video guide to know survey is about, the taget demography and how to handle the questions.",
  },
  {
    title: "You’re ready to withdraw !",
    description: "you can now withdraw your credit for the month of August",
  },

  {
    title: "Welcome on Board !",
    description: "See the rules and guidlines to get started",
  },
];
function Feed() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {data.map(({ title, description }, i) => (
        <FeedItem key={i} title={title} description={description} />
      ))}
    </div>
  );
}

export default Feed;
