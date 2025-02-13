'use client'

import { sampleData } from "@/app/lib/placeholder.data";
import { AppraisalPeriodType, AppraisalsDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/tableComponent";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    const columnArray: Array<string> = ['Emp Id', 'Name', 'Reporting TL', 'Appraisal Period', 'By Employee', 'By Manager', 'Status', 'Assigned To', 'Actions']
    const dataArray: AppraisalsDetailType[] = []
    sampleData?.data?.leaves.forEach((leaveData) => {

        const appraisalPeriodObj: AppraisalPeriodType = {
            from: leaveData?.leave_from_date,
            to: leaveData?.leave_to_date
        }

        dataArray.push({
            id: leaveData.id,
            emp_id: leaveData.emp_id,
            name: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            reporting_tl: `Daisy Bhavsar`,
            appraisal_period: appraisalPeriodObj,
            by_employee: 'Remarks by Employee',
            by_manager: 'Remarks by Manager',
            status: leaveData.leave_status,
            assigned_to: 'HR'
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