'use client'
import { sampleData } from "@/app/lib/placeholder.data";
import { CountDataType, LeaveDateType, LeaveDaysInfoType, LeaveDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/table-component";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    const columnArray: Array<string> = ['Id', 'Emp Id', 'Name', 'Reporting To', 'Leave Type', 'Leave Date', 'Days Info', 'Leave Applied', 'Leave Status', 'Actions']
    const dataArray: LeaveDetailType[] = []
    const dataCountArr: CountDataType = { all: 0 }
    sampleData?.data?.leaves.forEach((leaveData) => {
        const leaveDateObj: LeaveDateType = {
            from: leaveData?.leave_from_date,
            to: leaveData?.leave_to_date
        }
        const leaveDaysInfoObj: LeaveDaysInfoType = {
            total_days: leaveData.total_days,
            club: leaveData.leave_clubbing
        }
        dataArray.push({
            id: leaveData.id,
            emp_id: leaveData.emp_id,
            emp_name: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            reporting_to: 'Daisy Bhavsar',
            leave_type: leaveData.leave_type,
            leave_date: leaveDateObj,
            days_info: leaveDaysInfoObj,
            leave_added: leaveData.leave_added_type,
            status: leaveData.leave_status
        })
    })
    dataCountArr.all = sampleData?.data?.countofallleaves
    dataCountArr.pending = sampleData?.data?.countofpendingleaves
    dataCountArr.approved = sampleData?.data?.countofapprovedleaves
    dataCountArr.rejected = sampleData?.data?.countofrejectedleaves



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