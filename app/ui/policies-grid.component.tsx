
import { useEffect } from "react";
import HolidaysComponent from "@/app/ui/hrms/policies/holidays.component";
import ImportantInfoComponent from "@/app/ui/hrms/policies/important-info.component";

const tabArray: Array<string> = ['Holidays', 'Important Information', 'Company Policies', 'Guidelines']

const PoliciesGridComponent = () => {
    useEffect(() => {
        handleTabSelection({ tabName: 'Holidays' })
    })

    return (
        <div className="table flex flex-col mt-5 bg-white shadow-sm w-full h-full rounded-xl text-black sticky z-10">
            <div className="tab-header flex justify-start items-center border-b-[1px]">
                {tabArray.map((tabEle) => {
                    return (
                        <button key={tabEle} type="button"
                            onClick={() => {
                                handleTabSelection({ tabName: tabEle })
                            }}>
                            <div id={tabEle} className="flex flex-row items-center outline-none p-2 mt-2 ml-2 mr-2 mb-0">
                                {/* border-green-color border-t-0 border-r-0 border-b-2 border-l-0 */}
                                <span>{tabEle}</span>
                            </div>
                        </button>
                    )
                })}
            </div>
            <div className="tab-content flex w-full">
                {tabArray.map((tabEle) => {
                    const tabNameId = tabEle.toLowerCase().replace(' ', '-')
                    return (
                        <div className="hidden m-6 flex flex-col gap-4 w-full" id={`${tabNameId}-content`} key={tabEle}>
                            {tabEle === 'Holidays' ? (<HolidaysComponent />) : (<ImportantInfoComponent tabName={tabEle} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const handleTabSelection = ({ tabName }: { tabName: string }) => {
    const currentTabName = document.getElementById(`${tabName}`)
    const tabCotentId = tabName.toLowerCase().replace(' ', '-')
    const currentTabContentName = document.getElementById(`${tabCotentId}-content`)
    const activeTabName = document.querySelector('.active-tab')
    const activeContentBox = document.querySelector('.active-content-box');

    if (activeTabName) {
        activeTabName?.classList.remove('border-green-color', 'border-b-2', 'active-tab')
    }
    if (activeContentBox) {
        activeContentBox?.classList.replace('block', 'hidden')
        activeContentBox?.classList.remove(`active-content-box`)

    }
    currentTabName?.classList.add('border-green-color', 'border-b-2', 'active-tab')

    currentTabContentName?.classList.add(`active-content-box`)
    currentTabContentName?.classList.replace('hidden', 'block')

}

export default PoliciesGridComponent;