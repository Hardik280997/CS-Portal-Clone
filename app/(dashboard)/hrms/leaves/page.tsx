'use client'
import PageHeaderComponent from "@/app/ui/hrms/pageHeaderComponent";
import TableComponent from "@/app/ui/tableComponent";
import { capitalize } from "@/app/ui/utilityFunction";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname()
    const separatedPath = pathName.split('/')
    const pageTitle = capitalize(separatedPath[separatedPath.length - 1])
    return (
        <>
            <div>
                <PageHeaderComponent titleName={pageTitle} />
            </div>
            <div>
                <TableComponent />
            </div>
        </>

    );
}