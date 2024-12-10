import ReviewCard from "../share/ReviewCard";
import Title from "../share/Title";

function Reviews() {
  return (
    <div className="my-5">
      <Title name="customers review" />
      <div className="flex justify-center items-center gap-1 px-2">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;
