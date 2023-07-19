export default function Contact() {
  return (
    <div className="mt-16">
      <div className="container">
        <div className="">
          <iframe
            className="border-0 w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="flex flex-col mt-12 lg:flex-row items-center">
          <div className="basis-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-main-color p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="">
                <h4 className="text-xl font-bold">مکان:</h4>
                <p>تهران، خیابان آزادی</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-main-color p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="">
                <h4 className="text-xl font-bold">ایمیل:</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-main-color p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div className="">
                <h4 className="text-xl font-bold mb-1">شماره تماس:</h4>
                <p>0123467889</p>
              </div>
            </div>
          </div>
          <div className="basis-2/3 space-y-6 mt-12">
            <div className="flex flex-wrap justify-center gap-8">
              <input className="flex-1 border border-solid border-black rounded-sm py-2 px-2 focus:outline-main-color focus:border-[1px]" placeholder="نام" type="text" />
              <input className="flex-1 border border-solid border-black rounded-sm py-2 px-2 focus:outline-main-color focus:border-[1px]" placeholder="ایمیل" type="text" />
            </div>
            <input
              className="w-full border border-solid border-black rounded-sm py-2 px-2 focus:outline-main-color focus:border-[1px]"
              type="text"
              placeholder="عنوان"

            />
            <textarea
              className="w-full mt-4 border border-solid border-black rounded-sm py-2 px-2 min-h-[100px] resize-y focus:outline-main-color focus:border-[1px]"
              cols="30"
              rows="8"
              placeholder="پیام"
            ></textarea>
            <div className="bg-main-color w-32 mx-auto py-2 px-4 flex justify-center items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:bg-amber-300">
                <a href="#">ارسال پیام</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
