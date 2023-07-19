export default function NavBar() {
  return (
    <div className="">
      <nav className="flex flex-col justify-center py-4 text-white items-center xs:flex-row xs:justify-between">
        <div className="flex flex-col xs:flex-row items-center hover:outline-0 border-none">
          <img
            src="images/kasuka-logo.png"
            alt="logo of website"
            className="w-12 h-12"
          />
          <h1 className="text-4xl font-bold">
            <a href="#">KASUKA</a>
          </h1>
        </div>
        <ul className="hidden lg:flex gap-6">
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold text-main-color hover:text-main-color  transition-all duration-300 ease-linear"
            >
              خانه
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              درباره ما
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              خدمات
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              نمونه کارها
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              تیم
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              لیست کشویی
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm lg:text-lg lg:font-semi-bold hover:text-main-color  transition-all duration-300 ease-linear"
            >
              تماس با ما
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div>
            <a
              href="#"
              className="flex justify-center items-center border-2 border-solid border-main-color w-[4rem] ml-2 p-2 rounded-md hover:bg-main-color hover:text-black transition-all duration-300 ease-linear"
            >
              شروع
            </a>
          </div>
          <div className="space-y-1 lg:hidden">
            <div className="relative w-6 h-[2px] bg-white rounded-sm"></div>
            <div className="relative w-6 h-[2px] bg-white rounded-sm"></div>
            <div className="relative w-6 h-[2px] bg-white rounded-sm"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
