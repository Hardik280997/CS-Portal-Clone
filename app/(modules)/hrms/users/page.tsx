'use client'

import { sampleData } from "@/app/lib/placeholder.data";
import { UsersDetailType } from "@/app/ui/hrms/interfaces.hrms";
import PageHeaderComponent from "@/app/ui/hrms/pageheader.component";
import TableComponent from "@/app/ui/tableComponent";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    const columnArray: Array<string> = ['Emp Id', 'Name', 'Email Id', 'Contact No', 'Company', 'Reporting To', 'Actions']
    const dataArray: UsersDetailType[] = []

    sampleData?.data?.leaves.forEach((leaveData) => {
        dataArray.push({
            id: leaveData.id,
            emp_id: leaveData?.emp?.employee_number,
            name: `${leaveData.emp.first_name} ${leaveData.emp.last_name}`,
            email_id: leaveData?.emp?.email_id,
            contact_no: leaveData.leave_status,
            company_name: 'Crest Infosystems Pvt. Ltd.',
            reorting_to: 'Daisy Bhavsar'
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