
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
                    return (
                        <div className="hidden m-6 flex flex-col gap-4 w-full" id={`${tabEle.toLowerCase().replace(' ', '-')}-content`} key={tabEle}>
                            {tabEle === 'Holidays' ? (<HolidaysComponent />) : tabEle === 'Important Information' ? (<ImportantInfoComponent tabName='Important Information' />) : (<ImportantInfoComponent tabName='Company Policies' />)}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const handleTabSelection = ({ tabName }: { tabName: string }) => {


    const activeTabName = document.getElementsByClassName('active-tab')
    const activeContentBox = document.getElementsByClassName(`active-content-box`)

    if (activeTabName) {
        activeTabName.item(0)?.classList.remove('border-green-color')
        activeTabName.item(0)?.classList.remove('border-b-2')
        activeTabName.item(0)?.classList.remove('active-tab')
    }
    if (activeContentBox) {
        activeContentBox.item(0)?.classList.replace('block', 'hidden')
        activeContentBox.item(0)?.classList.remove(`active-content-box`)

    }
    document.getElementById(tabName)?.classList.toggle('border-green-color')
    document.getElementById(tabName)?.classList.toggle('border-b-2')
    document.getElementById(tabName)?.classList.toggle('active-tab')
    document.getElementById(`${tabName.toLowerCase().replace(' ', '-')}-content`)?.classList.toggle(`active-content-box`)
    document.getElementById(`${tabName.toLowerCase().replace(' ', '-')}-content`)?.classList.replace('hidden', 'block')

}

export default PoliciesGridComponent;