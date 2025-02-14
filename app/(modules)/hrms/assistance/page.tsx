'use client'

import { sampleData } from "@/app/lib/placeholder.data";
import { AssistanceDetailType, CountDataType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/table-component";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    const columnArray: Array<string> = ['Ticket Id', 'Title', 'Status', 'Created Date', 'Resolution Date', 'Rating', 'Actions']
    const dataArray: AssistanceDetailType[] = []
    const dataCountArr: CountDataType = { all: 0 }

    sampleData?.data?.leaves.forEach((leaveData) => {

        dataArray.push({
            ticket_id: leaveData.id,
            title: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            status: leaveData.leave_status,
            created_date: leaveData.createdAt,
            resolution_date: leaveData.updatedAt,
            rating: leaveData.total_days
        })
    })
    
    dataCountArr.all = sampleData?.data?.countofallleaves
    dataCountArr.open = 0
    dataCountArr.in_progress = 0
    dataCountArr.closed = 0
    dataCountArr.rejected = 0


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