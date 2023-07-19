import InnerFeedbacks from "./InnerFeedbacks";

export default function Feedbacks() {
  return (
    <div className="mt-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="basis-1/3">
            <img src="images/counts-img.jpg" alt="Feedback image" className="" />
          </div>
          <div className="basis-2/3 space-y-24 my-auto">
            <div className="">
              <h1 className="text-4xl font-bold">شایسته ترین لذت را به هر حال ارائه می دهد</h1>
              <p className="mt-4 text-justify">
                خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما
                من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود.
                درد مقصر است
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
                <InnerFeedbacks />
                <InnerFeedbacks />
                <InnerFeedbacks />
                <InnerFeedbacks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
