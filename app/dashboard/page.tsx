import Image from "next/image";
import Link from "next/link";
import Header from "@/app/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="flex p-6 ml-2">
          <h2 className="text-dark-gray-custom text-2xl font-semibold">Dashboard</h2>
        </div>
        <div className="ml-8 mt-2 mr-8 p-6 bg-white rounded-xl z-10 sticky">
          <div className="flex flex-row flex-wrap gap-6">
            <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 box-content">
              <Link href='/timetracker' className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg">
                {/* <div className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg"> */}
                <Image src='https://central.crestinfosystems.net/api/assets/1694434452354.png' width={70} height={70} alt="Timer Tracker Image" />
                <h1 className="text-2xl font-medium">Time Tracker</h1>
                {/* </div> */}
              </Link>
            </div>
            <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 box-content">
              <Link href='/assets' className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg">
                {/* <div className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg"> */}
                <Image src='https://central.crestinfosystems.net/api/assets/1706079319206.png' width={100} height={70} alt="Timer Tracker Image" />
                <h1 className="text-2xl font-medium">Asset Tracker</h1>
                {/* </div> */}
              </Link>
            </div>
            <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 box-content">
              <Link href='/hrms' className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg">
                {/* <div className="flex flex-col gap-2 items-center bg-box-grey-bg p-6 text-dark-gray-custom border-box-grey-border border-2 rounded-lg"> */}
                <Image src='https://central.crestinfosystems.net/api/assets/1709722772786.png' width={70} height={70} alt="Timer Tracker Image" />
                <h1 className="text-2xl font-medium">HRMS</h1>
                {/* </div> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="top-0 left-0 absolute -z-1">
          <Image src='https://central.crestinfosystems.net/static/media/Big-Ellipse.3552c24569f68c06e020.png' width={900} height={100} alt="Big Pattern Background" />
        </div>
        <div className="bottom-0 right-0 absolute -z-1">
          <Image src='https://central.crestinfosystems.net/static/media/Small-Ellipse.5425f613507c37ede944.png' width={500} height={100} alt="Small Pattern Background" />
        </div>
      </main>
    </>
  );
}