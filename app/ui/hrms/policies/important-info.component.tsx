import { emergencyContacts } from "@/app/lib/placeholder.data";
import React from "react";
import { PoliciesTabType } from "../interfaces.hrms";


const ImportantInfoComponent = ({ tabName }: { tabName: string }) => {

    const policiesTabList: PoliciesTabType[] = [
        {
            tabName: 'Important Information',
            policies: ['Important Information for Emergency']
        },
        {
            tabName: 'Company Policies',
            policies: ['Joining and Probation Policy']
        },
        {
            tabName: 'Company Policies',
            policies: ['Notice Period and Relieving']
        },
        {
            tabName: 'Company Policies',
            policies: ['Apply for Leave in Advance']
        },
        {
            tabName: 'Company Policies',
            policies: ['Office Hours']
        },
        {
            tabName: 'Company Policies',
            policies: ['Salary Deposit and Salary Slips']
        },
        {
            tabName: 'Company Policies',
            policies: ['Performance Assessment and Salary Increment']
        },
        {
            tabName: 'Guidelines',
            policies: ['Tips for Interviewers']
        },

    ].filter(tabEle => tabEle.tabName === tabName)

    return (
        <>
            <div className="bg-white flex flex-col gap-4">
                {
                    policiesTabList.map((tabEle, index) => (
                        <React.Fragment key={tabEle.tabName + index}>
                            {
                                tabEle.policies.map(policyEle => {
                                    const policyCls = policyEle.toLowerCase().replace(' ', '-')
                                    return (
                                        <React.Fragment key={policyEle}>
                                            <div id={policyCls + "-header"} className="bg-box-grey-bg p-4 border-l-4 border-green-color flex justify-between items-center cursor-pointer" onClick={() => {
                                                document.getElementById(`${policyCls + "-header"}`)?.classList.toggle('bg-green-color')
                                                const contentBox = document.getElementById(`${policyCls + "-content-page"}`)
                                                const arrowMark = document.getElementById(`${policyCls + '-arrow-mark'}`)


                                                if (contentBox?.classList.contains('hidden')) {
                                                    contentBox?.classList.replace('hidden', 'block')
                                                } else {
                                                    contentBox?.classList.replace('block', 'hidden')
                                                }

                                                if (arrowMark?.classList.contains('rotate-90')) {
                                                    arrowMark?.classList.replace('rotate-90', 'rotate-270')
                                                } else {
                                                    arrowMark?.classList.replace('rotate-270', 'rotate-90')
                                                }

                                            }}>
                                                <span>{policyEle}</span>
                                                <div id={policyCls + "-arrow-mark"} className="rotate-90">
                                                    <svg className="w-5 h-5 text-primary-text-color" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowUpIcon"><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>
                                                </div>
                                            </div>
                                            <div id={policyCls + "-content-page"} className="hidden bg-box-grey-bg -mt-4">
                                                <div className=" ml-12 mt-4 mb-4">
                                                    <table>
                                                        <thead className="border border-black">
                                                            <tr>
                                                                <th className="px-6 py-3 w-2/3 border border-black">Name</th>
                                                                <th className="px-6 py-3 w-1/3">Number</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                emergencyContacts?.data.map((contactEle) => (
                                                                    Object.entries(contactEle).map(([parentKey, parentValue]) => (
                                                                        <React.Fragment key={parentKey}>
                                                                            <tr className="border border-black">
                                                                                <td className="p-5"><b>{parentKey}</b></td>
                                                                            </tr>
                                                                            {
                                                                                Object.entries(parentValue).map(([childKey, childValue]) => (
                                                                                    <tr className="border border-black" key={childKey}>
                                                                                        <td className="border border-black p-5">{childValue.name}</td>
                                                                                        <td className="flex flex-wrap justify-center pt-4">{childValue.phoneNumber.join(', ')}</td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </React.Fragment>
                                                                    ))
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div >
                                        </React.Fragment>
                                    )
                                })
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </>

    );
}

export default ImportantInfoComponent;