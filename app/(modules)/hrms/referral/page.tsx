'use client'

import { sampleData } from "@/app/lib/placeholder.data";
import { ReferralDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/tableComponent";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    const columnArray: Array<string> = ['Sr. No.', 'Referred Candidate', 'Job Title', 'Status', 'Bonus Status', 'Created On', 'Actions']
    const dataArray: ReferralDetailType[] = []

    sampleData?.data?.leaves.forEach((leaveData) => {
        dataArray.push({
            id: leaveData.id,
            sr_no: leaveData.id,
            referred_candidate: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            job_title: `MERN Stack Developer`,
            status: leaveData.leave_status,
            bonus_status: leaveData.leave_status,
            created_on: leaveData.createdAt
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