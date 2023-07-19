export default function InnerAdverts() {
  return (
    <div className="flex items-center space-y-10">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 lg:w-20 lg:h-20 stroke-main-color"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      </div>
      <div className="space-y-3 mr-4">
        <h4 className="text-xl font-bold text-slate-600">تبلیغ سختی است</h4>
        <p className="text-slate-600 text-md">
          نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند
          نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند
        </p>
      </div>
    </div>
  );
}
