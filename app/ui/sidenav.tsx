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
            name: 'Project Management', href: usePathName === '/timetracker/projects' ? '/timetracker/projects' : '/timetracker/todos', icon: 'HomeIcon', route: '/timetracker', child: [
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
                                        <div className="flex items-center gap-3 group">
                                            <svg className={clsx("w-6 h-6", {
                                                'text-green-color': usePathName === linkEle.href,
                                                'text-box-grey-border': usePathName !== linkEle.href,
                                                'group-hover:text-green-color': true
                                            })} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
                                            </svg>
                                            <span className={clsx("text-lg", {
                                                'text-white': usePathName === linkEle.href,
                                                'text-box-grey-border': usePathName !== linkEle.href,
                                                'group-hover:text-white': true
                                            })}>{linkEle.name}</span>
                                            {
                                                linkEle.name === 'Project Management' ? (
                                                    <svg className={clsx("w-6 h-6 arrow-click", {
                                                        'text-white': usePathName === linkEle.href,
                                                        'text-box-grey-border': usePathName !== linkEle.href,
                                                        'group-hover:text-white': true
                                                    })} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                ) : (<></>)
                                            }
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

                    {/* TIME TRACKER MENU */}
                    {/* <Link href='/timetracker/timesheets'>
                        <div className="flex items-center gap-3 group">
                            <svg className={clsx("w-6 h-6", {
                                'text-green-color': usePathName === '/timetracker/timesheets',
                                'text-box-grey-border': usePathName !== '/timetracker/timesheets',
                                'group-hover:text-green-color': true
                            })} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className={clsx("text-lg", {
                                'text-white': usePathName === '/timetracker/timesheets',
                                'text-box-grey-border': usePathName !== '/timetracker/timesheets',
                                'group-hover:text-white': true
                            })}>Timesheets</span>
                        </div>
                    </Link>
                    <Link href='/timetracker/project-management'>
                        <div className="flex items-center gap-3 group">
                            <svg className={clsx("w-6 h-6", {
                                'text-green-color': usePathName === '/timetracker/project-management',
                                'text-box-grey-border': usePathName !== '/timetracker/project-management',
                                'group-hover:text-green-color': true
                            })} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864ZM12.0001 3.33233L5.88735 6.99995L12.0001 10.6676L18.1128 6.99995L12.0001 3.33233Z"></path>
                            </svg>
                            <span className={clsx("text-lg", {
                                'text-white': usePathName === '/timetracker/project-management',
                                'text-box-grey-border': usePathName !== '/timetracker/project-management',
                                'group-hover:text-white': true
                            })}>Project Management</span>
                        </div>
                    </Link>
                    <Link href='/timetracker/reports'>
                        <div className="flex items-center gap-3 group">
                            <svg className={clsx("w-6 h-6", {
                                'text-green-color': usePathName === '/timetracker/reports',
                                'text-box-grey-border': usePathName !== '/timetracker/reports',
                                'group-hover:text-green-color': true
                            })} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"></path>
                            </svg>
                            <span className={clsx("text-lg", {
                                'text-white': usePathName === '/timetracker/reports',
                                'text-box-grey-border': usePathName !== '/timetracker/reports',
                                'group-hover:text-white': true
                            })}>Reports</span>
                        </div>
                    </Link> */}
                </div>
                <div className="border-close-navbar hover:bg-close-navbar p-2 border-2 rounded-xl">
                    <Link href='/dashboard'>
                        <div className="flex justify-center gap-3">
                            <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>
                            </svg>
                            <span>Download App</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}