'use client'
import SideNav from "@/app/ui/sidenav";
import Header from "@/app/ui/header";
import Image from "next/image";
import { useNavBar } from "../ui/navBarContext";
import clsx from "clsx";

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
        </section>
    );
}