'use client';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useNavBar } from "./navBarContext";
import Image from "next/image";

export default function Header() {
    const navBarContext = useNavBar()
    const usePathName: string = usePathname()
    const separatedPath: string = `/${usePathName.split('/')[1]}`

    type PageTitles = {
        [key: string]: string;
    };

    const pageTitles: PageTitles = {
        '/dashboard': 'Central System',
        '/timetracker': 'Dashboard',
        '/timetracker/timesheets': 'Timesheets',
        '/timetracker/reports': 'Reports',
        '/timetracker/projects': 'Projects',
        '/timetracker/todos': 'To Dos',
        '/assets': 'AMS',
        '/assets/ticket': 'AMS',
    };

    let pageTitle = pageTitles[usePathName] || 'HRMS';
    return (
        <header className={clsx("p-3 bg-white fixed z-50 top-0 left-0 right-0 shadow-xl", {
            'left-72 transition delay-150 ease-in-out': navBarContext?.isNavBarVisible && pageTitle !== 'Central System'
        })}>
            <div>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-3 ml-5">
                        <button className={clsx(
                            "cursor-pointer rounded-2xl bg-close-navbar p-1",
                            {
                                'hidden': separatedPath === '/dashboard' || navBarContext?.isNavBarVisible
                            })} onClick={() => { navBarContext?.setNavBarVisible() }}>
                            <svg className="close-menu h-6 w-6" stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                            </svg>
                        </button>
                        <h1 className="text-2xl font-bold text-dark-gray-custom ">{pageTitle}</h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mr-5">
                        {/* CampaignIcon */}
                        <div className={clsx(
                            'h-10, w-10',
                            {
                                'hidden': separatedPath === '/dashboard'
                            }
                        )}>
                            <svg className="cursor-pointer text-lg h-11 w-11" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CampaignIcon" fill="rgb(35, 35, 35)">
                                <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"></path>
                            </svg>
                        </div>
                        {/* NewReleasesIcon */}
                        <div className={clsx(
                            "cursor-pointer w- h- p-1.5 rounded-full border-2 border-[rgb(140,199,20)] bg-dark-gray-custom",
                            {
                                'hidden': separatedPath === '/hrms' || separatedPath === '/dashboard'
                            }
                        )}
                        >
                            <svg className="cursor-pointer text-lg h-6 w-6" fill='#8cc714' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NewReleasesIcon" aria-label="Release Notes"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                        </div>
                        {/* Bell Icon */}
                        <div className={clsx(
                            'h-10 w-10',
                            {
                                'hidden': separatedPath === '/dashboard' || separatedPath === '/timetracker' || separatedPath === '/assets'
                            }
                        )}>
                            <svg className="cursor-pointer text-lg" stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z"></path>
                            </svg>
                        </div>
                        {/* Menu Icon */}
                        <div className="w-9 h-9">
                            <svg className="cursor-pointer h-9 w-9" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512" fill="rgb(35, 35, 35)" id="basic-button" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg">
                                <path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z"></path>
                            </svg>
                        </div>
                        {/* Profile Icon */}
                        <div className={clsx(
                            "cursor-pointer w-9 h-9 p-1.5 rounded-full border-2 border-[rgb(140,199,20)] bg-person-bg-color",
                            {
                                'hidden': separatedPath === '/timetracker'
                            }
                        )}>
                            <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon" fill="rgb(35, 35, 35)">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                        </div>
                        {/* Company Profile Icon */}
                        <div className={clsx(
                            "cursor-pointer w-10 h-10 p-1.5 rounded-full border-2 border-[rgb(140,199,20)] bg-dark-gray-custom",
                            {
                                'hidden': separatedPath === '/hrms' || separatedPath === '/assets' || separatedPath === '/dashboard'
                            }
                        )}>
                            <Image src='data:image/png;base64,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' width={50} height={50} alt="profile-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}