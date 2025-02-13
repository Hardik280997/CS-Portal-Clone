'use client'
import { sampleData } from "@/app/lib/placeholder.data";
import { WfhDateType, WfhDaysInfoType, WfhDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/tableComponent";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = separatedPath[separatedPath.length - 1].toUpperCase()
    const columnArray: Array<string> = ['Id', 'Emp Id', 'Name', 'Reporting To', 'WFH Date', 'Days Info', 'WFH Status', 'Actions']
    const dataArray: WfhDetailType[] = []

    sampleData?.data?.leaves.forEach((leaveData) => {

        const wfhDateObj: WfhDateType = {
            from: leaveData?.leave_from_date,
            to: leaveData?.leave_to_date
        }
        const wfhDaysInfoObj: WfhDaysInfoType = {
            total_days: leaveData.total_days
        }
        dataArray.push({
            id: leaveData.id,
            emp_id: leaveData.emp_id,
            emp_name: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            reporting_to: 'Daisy Bhavsar',
            wfh_date: wfhDateObj,
            days_info: wfhDaysInfoObj,
            wfh_status: leaveData.leave_status
        })
    })

    return (
        <>
            <div>
                <PageHeaderComponent titleName={pageTitle} />
            </div>
            <div>
                <TableComponent pageTitle={pageTitle} columns={columnArray} dataArray={dataArray} />
            </div>
        </>


    );
}