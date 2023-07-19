export default function ServicesBox() {
  return (
    <div className="space-y-4 flex-grow flex-shrink-0 basis-1/2 text-center border border-solid border-black-100 px-4 py-16 rounded-sm transition-all duration-300 ease-linear hover:-translate-y-4 hover:border-none hover:shadow-lg md:basis-1/3 lg:basis-1/4">
      <div className="bg-main-color inline-flex p-4 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      </div>
      <h4 className="text-2xl font-bold">
        <a href="#" className="outline-none hover:text-main-color transition-all duration-300 ease-linear ">هیچکس دیگر</a>
      </h4>
      <p className="text-justify text-sm/relaxed">
        اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته
        چاپلوسی هستیم
      </p>
    </div>
  );
}
