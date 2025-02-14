'use client'
import SideNav from "@/app/ui/sidenav";
import Header from "@/app/ui/header";
import Image from "next/image";
import { useNavBar } from "../ui/navBarContext";
import clsx from "clsx";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    const navBarContext = useNavBar()
    return (
        <section>
            <Header />
            <SideNav />
            <div className="mt-20">
                <div className={clsx({
                    'ml-72': navBarContext?.isNavBarVisible
                })}>
                    <div className="ml-9 mr-6">
                        {children}
                    </div>
                </div>
            </div>
            <div className="top-0 left-0 absolute -z-1">
                <Image src='https://central.crestinfosystems.net/static/media/Big-Ellipse.3552c24569f68c06e020.png' width={900} height={100} alt="Big Pattern Background" />
            </div>
            <div className="bottom-0 right-0 absolute -z-1">
                <Image src='https://central.crestinfosystems.net/static/media/Small-Ellipse.5425f613507c37ede944.png' width={500} height={100} alt="Small Pattern Background" />
            </div>
            <div className="hidden z-50 sticky border-2 border-solid border-white floatingMenu bg-primary-text-color relative flex flex-wrap -mt-[30rem] mr-12 pt-4 pb-4 w-[300px] float-right rounded-xl items-center justify-evenly">
                <Link href='/timetracker'>
                    <div className="flex flex-col gap-2 items-center">
                        <Image src="https://central.crestinfosystems.net/api/assets/1694434452354.png" width={30} height={32} alt="tms-logo" />
                        <span className="text-white">TMS</span>
                    </div>
                </Link>
                <Link href='/assets'>
                    <div className="flex flex-col gap-2 items-center">
                        <Image src="https://central.crestinfosystems.net/api/assets/1706079319206.png" width={30} height={32} alt="ams-logo" />
                        <span className="text-white">AMS</span>
                    </div>
                </Link>
                <Link href='/dashboard'>
                    <div className="flex flex-col gap-2 items-center">
                        <Image src="https://central.crestinfosystems.net/static/media/favicon.ea821d81d6f3aba20ec8.ico" width={30} height={32} alt="cms-logo" />
                        <span className="text-white">CMS</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}