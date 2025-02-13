'use client'
import { useEffect } from "react";
import { usePageHeader } from "./pagetitle.context";

const PageTitleComponent = ({ titleName }: { titleName: string }) => {
    const pageHeader = usePageHeader()
    useEffect(() => {
        pageHeader?.updatePageHeader(titleName)
    })

    return (
        // <div className={clsx({
        //     'ml-72': navBarContext?.isNavBarVisible
        // })}>
        <div>
            <h1 className="font-semibold text-2xl">{pageHeader?.pageHeader}</h1>
        </div>
        // </div>
    );
}

export default PageTitleComponent;