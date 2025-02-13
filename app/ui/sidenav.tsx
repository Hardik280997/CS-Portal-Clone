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
        route: string
        child?: HamburgerLinks[]
    }
    const links: HamburgerLinks[] = [
        { name: 'Dashboard', href: pathName ? separatedPath : '/dashboard', route: '/timetracker' },
        { name: 'Timesheets', href: '/timetracker/timesheets', route: '/timetracker' },
        {
            name: 'Project Management', href: ['/timetracker/projects', '/timetracker/todos'].includes(usePathName) ? usePathName : '', route: '/timetracker', child: [
                { name: 'Projects', href: '/timetracker/projects', route: '/timetracker' },
                { name: 'To Dos', href: '/timetracker/todos', route: '/timetracker' }
            ]
        },
        { name: 'Reports', href: '/timetracker/reports', route: '/timetracker' },

        { name: 'Dashboard', href: pathName ? separatedPath : '/dashboard', route: '/hrms' },
        { name: 'Leaves', href: '/hrms/leaves', route: '/hrms' },
        { name: 'WFH', href: '/hrms/wfh', route: '/hrms' },
        { name: 'Assistance', href: '/hrms/assistance', route: '/hrms' },
        { name: 'Appraisals', href: '/hrms/appraisals', route: '/hrms' },
        { name: 'Policies', href: '/hrms/policies', route: '/hrms' },
        { name: 'Referral', href: '/hrms/referral', route: '/hrms' },
        { name: 'Users', href: '/hrms/users', route: '/hrms' },

        { name: 'Assets', href: '/assets', route: '/assets' },
        { name: 'Assets Tickets', href: '/assets/ticket', route: '/assets' }
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
            clsx("p-0 flex flex-col bg-primary-text-color w-72 h-full fixed z-50 top-0 left-0 bottom-0 text-white", {
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
                                            <Image src={usePathName === linkEle.href ? `/Images/${linkEle.name}.svg` : `/Images/${linkEle.name}-wc.svg`} height={25} width={25} alt={`${linkEle.name}-logo`} />
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