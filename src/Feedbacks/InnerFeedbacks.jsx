export default function InnerFeedbacks() {
  return (
    <div className="md:basis-1/3 md:mx-auto">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 stroke-main-color"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <p className="text-3xl font-bold">100</p>
      </div>
      <p className="mt-4">
        جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ
        وقت او را متهم نمی کند
      </p>
    </div>
  );
}
