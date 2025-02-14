
import { useEffect, useState } from "react";
import HolidaysComponent from "@/app/ui/hrms/policies/holidays.component";
import ImportantInfoComponent from "@/app/ui/hrms/policies/important-info.component";
import clsx from "clsx";

const tabArray: Array<string> = ['Holidays', 'Important Information', 'Company Policies', 'Guidelines']

const PoliciesGridComponent = () => {
    const [currentTab, setCurrentTab] = useState('holidays')
    const handleTabSelection = ({ tabName }: { tabName: string }) => setCurrentTab(tabName)

    return (
        <div className="table flex flex-col mt-5 bg-white shadow-sm w-full h-full rounded-xl text-black sticky z-10">
            <div className="tab-header flex justify-start items-center border-b-[1px]">
                {tabArray.map((tabEle) => {
                    const tabNameId = tabEle.toLowerCase().replaceAll(' ', '_')
                    return (
                        <button key={tabNameId} type="button" onClick={() => { handleTabSelection({ tabName: tabNameId }) }}>
                            <div className={clsx(
                                "flex flex-row items-center outline-none p-2 mt-2 ml-2 mr-2 mb-0",
                                currentTab === tabNameId && 'border-green-color border-b-2',
                                currentTab !== tabNameId && 'border-b-0'
                            )}>
                                <span>{tabEle}</span>
                            </div>
                        </button>
                    )
                })}
            </div>
            <div className="tab-content flex w-full">
                {tabArray.map((tabEle) => {
                    const tabNameId = tabEle.toLowerCase().replaceAll(' ', '_')
                    return (
                        <div className={clsx(
                            "m-6 flex flex-col gap-4 w-full",
                            `${currentTab}-content` === `${tabNameId}-content` && 'block',
                            `${currentTab}-content` !== `${tabNameId}-content` && 'hidden'
                        )} id={`${tabNameId}-content`} key={tabEle}>
                            {tabEle === 'Holidays' ? (<HolidaysComponent />) : (<ImportantInfoComponent tabName={tabEle} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PoliciesGridComponent;