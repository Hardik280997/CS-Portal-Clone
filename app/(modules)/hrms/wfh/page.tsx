'use client'
import { sampleData } from "@/app/lib/placeholder.data";
import { CountDataType, WfhDateType, WfhDaysInfoType, WfhDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/table-component";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = separatedPath[separatedPath.length - 1].toUpperCase()
    const columnArray: Array<string> = ['Id', 'Emp Id', 'Name', 'Reporting To', 'WFH Date', 'Days Info', 'WFH Status', 'Actions']
    const dataArray: WfhDetailType[] = []
    const dataCountArr: CountDataType = { all: 0 }
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
            status: leaveData.leave_status
        })
    })

    dataCountArr.all = sampleData?.data?.countofallleaves
    dataCountArr.pending = sampleData?.data?.countofpendingleaves
    dataCountArr.approved = sampleData?.data?.countofapprovedleaves
    dataCountArr.rejected = sampleData?.data?.countofrejectedleaves
    dataCountArr.hr_review = 0

    return (
        <>
            <div>
                <PageHeaderComponent titleName={pageTitle} />
            </div>
            <div>
                <TableComponent pageTitle={pageTitle} columns={columnArray} dataArray={dataArray} dataCountArr={dataCountArr} />
            </div>
        </>


    );
}