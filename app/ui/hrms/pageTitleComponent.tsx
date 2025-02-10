'use client'
import { useEffect } from "react";
import clsx from "clsx";
import { useNavBar } from "../navBarContext";
import { usePageHeader } from "./pageTitleContext";

const PageTitleComponent = ({ titleName }: { titleName: string }) => {
    let pageHeader = usePageHeader()
    const navBarContext = useNavBar()
    useEffect(() => {
        pageHeader?.updatePageHeader(titleName)
    }, [])

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