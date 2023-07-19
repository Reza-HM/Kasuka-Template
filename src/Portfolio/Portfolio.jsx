export default function Portfolio() {
  return (
    <div className="mt-16">
      <div className="container">
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-8">
            <li className="bg-main-color py-1 px-3 rounded-md">
              <a href="#" className="text-slate-800 font-semibold ">
                همه
              </a>
            </li>
            <li className="hover:bg-main-color hover:py-1 hover:px-3 hover:rounded-md transition-all duration-300 ease-linear">
              <a href="#" className="text-slate-800 font-semibold ">
                برنامه
              </a>
            </li>
            <li className="hover:bg-main-color hover:py-1 hover:px-3 hover:rounded-md transition-all duration-300 ease-linear">
              <a href="#" className="text-slate-800 font-semibold ">
                محصول
              </a>
            </li>
            <li className="hover:bg-main-color hover:py-1 hover:px-3 hover:rounded-md transition-all duration-300 ease-linear">
              <a href="#" className="text-slate-800 font-semibold ">
                اینترنت
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-8 mt-8">
          <img src="images/portfolio-2.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-1.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-5.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-4.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-6.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-8.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-7.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
          <img src="images/portfolio-9.jpg" alt="Portfolio image" className="flex-1 min-w-[200px]"/>
        </div>
      </div>
    </div>
  );
}
