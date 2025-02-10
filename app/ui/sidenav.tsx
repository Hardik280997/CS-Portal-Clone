'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useNavBar } from "./navBarContext";

export default function SideNav() {
    const usePathName: string = usePathname()
    const RoutePaths: Array<string> = ['/dashboard', '/timetracker', '/assets', '/hrms']
    const separatedPath: string = `/${usePathName.split('/')[1]}`
    const pathName: boolean = RoutePaths.includes(separatedPath)
    const navBarContext = useNavBar()
    interface HamburgerLinks {
        name: string,
        href: string,
        icon: string,
        route: string
        child?: HamburgerLinks[]
    }
    const links: HamburgerLinks[] = [
        { name: 'Dashboard', href: pathName ? separatedPath : '/dashboard', icon: 'HomeIcon', route: '/timetracker' },
        { name: 'Timesheets', href: '/timetracker/timesheets', icon: 'HomeIcon', route: '/timetracker' },
        {
            name: 'Project Management', href: ['/timetracker/projects', '/timetracker/todos'].includes(usePathName) ? usePathName : '', icon: 'HomeIcon', route: '/timetracker', child: [
                { name: 'Projects', href: '/timetracker/projects', icon: 'HomeIcon', route: '/timetracker' },
                { name: 'To Dos', href: '/timetracker/todos', icon: 'HomeIcon', route: '/timetracker' }
            ]
        },
        { name: 'Reports', href: '/timetracker/reports', icon: 'HomeIcon', route: '/timetracker' },

        { name: 'Dashboard', href: pathName ? separatedPath : '/dashboard', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Leaves', href: '/hrms/leaves', icon: 'HomeIcon', route: '/hrms' },
        { name: 'WFH', href: '/hrms/wfh', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Assistance', href: '/hrms/assistance', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Appraisals', href: '/hrms/appraisals', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Policies', href: '/hrms/policies', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Referral', href: '/hrms/referral', icon: 'HomeIcon', route: '/hrms' },
        { name: 'Users', href: '/hrms/users', icon: 'HomeIcon', route: '/hrms' },

        { name: 'Assets', href: '/assets', icon: 'HomeIcon', route: '/assets' },
        { name: 'Asset Tickets', href: '/assets/ticket', icon: 'HomeIcon', route: '/assets' }
    ].filter(path => path.route === separatedPath)

    interface sideNavBarImages {
        [key: string]: string
    }

    const sideNavBarImages: sideNavBarImages = {
        '/timetracker': 'https://tms.crestinfosystems.net/static/media/sitelogo1.c11f6293efab3bd59931.png',
        '/hrms': 'https://hrms.crestinfosystems.net/static/media/hrms_logo.50a2ccd8c7f21e73675604dd54fff1c7.svg',
        '/assets': 'https://ams.crestinfosystems.net/static/media/ams_logo.6a9636f202cb0e396140207411c194c6.svg'
    }

    return (
        <div className={
            clsx("p-0 flex flex-col bg-navbar-color w-72 h-full fixed z-50 top-0 left-0 bottom-0 text-white", {
                'hidden transition delay-150 ease-in-out': !navBarContext?.isNavBarVisible
            })}>
            <div className="m-4 flex justify-between items-center">

                <Image src={sideNavBarImages[separatedPath]} style={{ width: 'auto', height: '37px' }} alt="Logo" width={100} height={37} />
                <button onClick={() => {
                    navBarContext?.setNavBarVisible()
                }}>
                    <svg className="open-menu w-6 h-6 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
                </button>
            </div>
            <hr className="border-2 border-solid outline-none border-navbar-hr-color " />
            <div className="flex flex-col justify-between w-full mt-2 p-5 w-full h-full">
                <div className="flex flex-col justify-start gap-8 w-full h-full">
                    {
                        links.map(linkEle => {
                            return (
                                <div key={linkEle.name} className="group">
                                    <Link key={linkEle.name} href={linkEle.href}>
                                        <div className="flex items-center gap-3 w-full group" id="rotateDiv">
                                            <svg className={clsx("w-6 h-6", {
                                                'text-green-color': usePathName === linkEle.href,
                                                'text-box-grey-border': usePathName !== linkEle.href,
                                                'group-hover:text-green-color': true
                                            })} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
                                            </svg>
                                            <div className="flex justify-between w-full">
                                                <span className={clsx("textmd", {
                                                    'text-white': usePathName === linkEle.href,
                                                    'text-box-grey-border': usePathName !== linkEle.href,
                                                    'group-hover:text-white': true
                                                })}>{linkEle.name}</span>
                                                {
                                                    linkEle.name === 'Project Management' ? (
                                                        <button type="button" id="rotateButton">
                                                            <svg className={clsx("w-6 h-6", {
                                                                'text-white': usePathName === linkEle.href,
                                                                'text-box-grey-border': usePathName !== linkEle.href,
                                                                'group-hover:text-white': true
                                                            })} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                                                <polyline points="9 18 15 12 9 6"></polyline>
                                                            </svg>
                                                        </button>
                                                    ) : (<></>)
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                    {
                                        linkEle?.child ?
                                            (
                                                <div className="flex flex-col gap-5 mt-2 ml-1">
                                                    {
                                                        linkEle?.child?.map(childEle => {
                                                            return (
                                                                <Link key={childEle.name} href={childEle.href}>
                                                                    <div className="flex flex-row items-center gap-4 group">
                                                                        <svg className={clsx("w-4 h-4", {
                                                                            'text-green-color': usePathName === childEle.href,
                                                                            'text-white': usePathName !== childEle.href,
                                                                            'group-active:text-green-color': true
                                                                        })} stroke="currentColor" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                                        </svg>
                                                                        <span className={clsx("text-lg", {
                                                                            'text-white': usePathName === childEle.href
                                                                        })}>{childEle.name}</span>
                                                                    </div>
                                                                </Link>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                            :
                                            (
                                                <></>
                                            )
                                    }

                                </div>
                            )
                        })
                    }
                </div>
                <div className={clsx(
                    "border-close-navbar hover:bg-close-navbar p-2 border-2 rounded-xl",
                    {
                        'hidden': separatedPath !== '/timetracker'
                    }
                )}>
                    <Link href='/dashboard'>
                        <div className="flex justify-center gap-3">
                            <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>
                            </svg>
                            <span>Download App</span>
                        </div>
                    </Link>
                </div>
                <div className={clsx("flex align-start items-center group",
                    {
                        'hidden': separatedPath === '/timetracker'
                    }
                )}>
                    <Link href='/'>
                        <div className="flex justify-center gap-3">
                            <svg className={clsx("w-6 h-6 text-box-grey-border", {
                                'group-hover:text-green-color': true
                            })} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
                            </svg>
                            <span className={clsx("textmd text-box-grey-border", {
                                'group-hover:text-white': true
                            })}>Sign Out</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}