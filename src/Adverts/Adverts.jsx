import InnerAdverts from "./InnerAdverts"

export default function adverts() {
  return (
    <div className="mt-20">
        <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full">
                    <img src="images/features.jpg" alt="adverts" className="w-full" />
                </div>
                <div className="w-full lg:w-1/2">
                    <InnerAdverts />
                    <InnerAdverts />
                    <InnerAdverts />
                    <InnerAdverts />
                </div>
            </div>
        </div>
    </div>
  )
}
