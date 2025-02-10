import clsx from "clsx";
import PageTitleComponent from "./pageTitleComponent";

const PageHeaderComponent = ({ titleName }: { titleName: string }) => {
    const addEntryBtnText = titleName === 'Leaves' ? 'Apply Leave' : titleName === 'Assistance' ? 'Create Ticket' : titleName === 'Referral' ? 'Add Referral' : titleName === 'Users' ? 'Add User' : 'Apply WFH'
    const noWidgetArray = ['Dashboard', 'Policies'].includes(titleName)
    const addWidgetArray = !['Leaves', 'WFH', 'Assistance', 'Referral', 'Users'].includes(titleName)
    const searchBarWidgetArray = !['Leaves', 'WFH', 'Assistance', 'Appraisals', 'Referral', 'Users'].includes(titleName)
    const filterBtnWidgetArray = !['Leaves', 'WFH', 'Referral', 'Users'].includes(titleName)
    return (
        <div className="flex items-center justify-between">
            <div>
                <PageTitleComponent titleName={titleName} />
            </div>
            <div className={clsx("flex justify-between gap-1.5", {
                'hidden': noWidgetArray
            })}>
                <div className={clsx("flex items-center gap-2 p-2 bg-white shadow-lg rounded-lg m-2.5 pl-4 pr-4", {
                    'hidden': searchBarWidgetArray
                })}>
                    <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <span>
                        <input className="outline-none border-none" placeholder="Search here" type="text" />
                    </span>
                </div>
                <button className={clsx("flex items-center gap-2 p-2 bg-navbar-color text-white rounded-lg m-2.5 pl-4 pr-4 hover:bg-primary-btn-hover", {
                    'hidden': addWidgetArray
                })} type="button">
                    {addEntryBtnText}
                    <span>
                        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
                    </span>
                </button>
                <button className={clsx("flex items-center gap-2 p-2 bg-navbar-color text-white rounded-lg m-2.5 pl-4 pr-4 hover:bg-primary-btn-hover", {
                    'hidden': titleName !== 'Leaves'
                })} type="button">
                    Leave Info
                    <span>
                        <svg className="w-6 h-6" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EventNoteIcon"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path></svg>
                    </span>
                </button>
                <button className={clsx("flex items-center gap-2 p-2 bg-navbar-color text-white rounded-lg m-2.5 pl-4 pr-4 hover:bg-primary-btn-hover", {
                    'hidden': filterBtnWidgetArray
                })} type="button">
                    Filters
                    <span>
                        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.4037 5L12 13.3944L17.5963 5H6.4037Z"></path></svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default PageHeaderComponent;