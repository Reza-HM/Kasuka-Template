import NavBar from "./NavBar";
import Boxes from "./Boxes";

export default function Header() {
  return (
    <header className="header h-auto xl:h-screen bg-cover bg-blend-multiply py-8 bg-neutral-500">
      <div className="container">
        <NavBar />
        <div className="flex flex-col justify-center items-center gap-4 mt-36">
          <h1 className="text-white text-5xl font-bold text-center">
            راه حل های قدرتمند دیجیتال با
          </h1>
          <h1 className="text-main-color text-6xl font-bold text-center">
            Kasuka
          </h1>
          <h3 className="text-white text-2xl font-semibold text-center">
            ما تیمی از بازاریابان با استعداد دیجیتال هستیم
          </h3>
        </div>
        <div className="mt-20 space-y-4 md:space-y-0 gap-4 md:flex md:flex-wrap md:justify-center">
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
        </div>
      </div>
    </header>
  );
}
