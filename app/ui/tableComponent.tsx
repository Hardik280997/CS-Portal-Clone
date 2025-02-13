import clsx from "clsx";
import { useState } from "react";
import { GridTabType } from "./hrms/interfaces.hrms";
import { capitalize } from "./utilityFunction";

const TableComponent = <Type,>({ pageTitle, columns, dataArray }: { pageTitle: string, columns: Array<string>, dataArray: Type[] }) => {

    const [rowsPerPage, setRowsPerPage] = useState(10)
    const tabArray: GridTabType[] = [
        { tabName: 'All', modules: ['Leaves', 'WFH', 'Assistance'] },
        { tabName: 'Pending', modules: ['Leaves', 'WFH'] },
        { tabName: 'Approved', modules: ['Leaves', 'WFH'] },
        { tabName: 'Rejected', modules: ['Leaves', 'WFH', 'Assistance'] },
        { tabName: 'HR Review', modules: ['WFH'] },
        { tabName: 'Open', modules: ['Assistance'] },
        { tabName: 'In Progress', modules: ['Assistance'] },
        { tabName: 'Closed', modules: ['Assistance'] }
    ].filter((ele) => ele.modules.includes(pageTitle))
    const rowsPerPageArr: Array<number> = [10, 25, 50, 100]

    return (
        <div className="table flex flex-col mt-5 bg-white shadow-sm w-full h-full rounded-xl text-black sticky z-10">
            <div className="tab-header flex justify-start items-center border-b-2">
                {tabArray.map((tabEle) => {
                    return (
                        <div key={tabEle.tabName} className="flex flex-row items-center border-green-color border-t-0 border-r-0 border-b-2 border-l-0 outline-none p-1 mt-2 ml-2 mr-2 mb-0">
                            <span>
                                <button type="button" className="flex justify-between">
                                    <span>{tabEle.tabName}</span>
                                </button>
                            </span>
                            <span className="count bg-green-color rounded-lg p-1 m-1 text-xs text-white">1</span>
                        </div>
                    )
                })}
            </div>
            <div className="tab-content w-full">
                <table className="w-full">
                    <thead className="border-b-2">
                        <tr>
                            {
                                columns.map((columnEle) => {
                                    return (
                                        <th className={clsx("px-6 py-3", {
                                            'hidden': columnEle === 'Id'
                                        })} key={columnEle}>{columnEle}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataArray.map((rowData, index) => {
                                return (
                                    <tr className={clsx({
                                        'border-b-2': (index + 1) === dataArray.length - 1,
                                        'border-b-0': (index + 1) !== dataArray.length - 1,
                                    })} key={index}>
                                        {/* Replace index with id */}
                                        {
                                            Object.entries(rowData as { [key: string]: string | number | object }).map(([key, value], index) => {
                                                if (typeof value === 'object') {
                                                    return (
                                                        <td key={key} className="text-center px-6 py-3">
                                                            {
                                                                Object.entries(value).map(([childKey, childValue]) => {
                                                                    return (
                                                                        <div key={childKey}>
                                                                            <span className="font-semibold">{capitalize(childKey)}: </span>
                                                                            <span>{childValue}</span>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </td>
                                                    )
                                                } else {
                                                    return (
                                                        <td key={index} className={clsx("text-center px-6 py-3", {
                                                            'hidden': key === 'id'
                                                        })} >
                                                            <span className={clsx({
                                                                'bg-light-black-color rounded-lg px-6 py-2 font-medium text-sm': key.includes('status') && value === 'pending',
                                                                'bg-light-green-color rounded-lg px-6 py-2 font-medium text-sm': key.includes('status') && value === 'approved',
                                                                'bg-delete-btn-hover rounded-lg px-6 py-2 font-medium text-sm': key.includes('status') && value === 'rejected'
                                                            })}>
                                                                {typeof value === 'string' ? capitalize(value) : value}
                                                            </span>
                                                        </td>
                                                    )
                                                }
                                            })
                                        }
                                        <td className="text-center px-6 py-3">
                                            <div className="flex justify-around">
                                                <button className="bg-view-btn p-2.5 hover:bg-view-btn-hover rounded-xl" type="button">
                                                    <svg className="w-5 h-5 text-view-btn-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                                                </button>
                                                <button className="bg-edit-btn p-2.5 hover:bg-edit-btn-hover rounded-xl" type="button">
                                                    <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path></svg>
                                                </button>
                                                <button className="bg-delete-btn p-2.5 hover:bg-delete-btn-hover rounded-xl" type="button">
                                                    <svg className="w-5 h-5 text-delete-btn-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="tab-footer flex justify-between items-center m-4 min-w-screen">
                <div className="rowPerPage flex flex-wrap justify-evenly items-center w-1/6 z-10 relative">
                    <span className="text-light-gray-custom">Rows per page</span>
                    <div className="flex flew-wrap flex-col">
                        <button className="flex flex-wrap gap-3 border-[1px] outline-none border-black p-2 rounded-lg" onClick={handleDropdown}>
                            <span>{rowsPerPage}</span>
                            <svg className="w-5 h-5 rotate-270" id="ArrowDropDownIcon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg>
                        </button>
                        <ul title="rowPerPage" id="dropdown" className="hidden flex flex-wrap flex-col mt-11 w-16 shadow-sm rounded-lg z-20 absolute">
                            {
                                rowsPerPageArr.map((rowEle, index) => {
                                    return (
                                        <li key={rowEle} id="dropdownLi" className={clsx("text-center p-2 cursor-pointer w-full", {
                                            'bg-green-color': rowsPerPage == rowEle,
                                            'bg-white': rowsPerPage !== rowEle,
                                            'hover:bg-light-green-color': rowsPerPage !== rowEle,
                                            'rounded-t-lg': index === 0,
                                            'rounded-b-lg': index === rowsPerPageArr.length - 1
                                        })} value="rowEle" onClick={() => {
                                            setRowsPerPage(rowEle);
                                            handleDropdown()
                                        }}>{rowEle}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="pageNo flex justify-evenly w-1/6">
                    <button type="button">
                        <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FirstPageIcon"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg>
                    </button>
                    <button type="button">
                        <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                    <button type="button">
                        <span className="rounded-lg bg-green-color pl-2.5 pr-2.5 pt-2 pb-2">1</span>
                    </button>
                    <button type="button">
                        <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                    <button type="button">
                        <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LastPageIcon"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>
                    </button>
                </div>
            </div>
        </div >
    );
}

const handleDropdown = () => {
    const dropdown = document.getElementById('dropdown')
    const arrowBtn = document.getElementById('ArrowDropDownIcon')
    if (dropdown && dropdown.classList.contains('hidden')) {
        dropdown.classList.replace('hidden', 'block')
    } else if (dropdown) {
        dropdown.classList.replace('block', 'hidden');
    }
    if (arrowBtn && arrowBtn.classList.contains('rotate-270')) {
        arrowBtn.classList.replace('rotate-270', 'rotate-180')
    } else if (arrowBtn) {
        arrowBtn.classList.replace('rotate-180', 'rotate-270')
    }
}

export default TableComponent;