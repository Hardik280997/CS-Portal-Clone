'use client'
import { createContext, ReactNode, useContext, useState } from "react";

interface pageHeaderContextType {
    pageHeader: string,
    updatePageHeader: (newHeader: string) => void
}

const pageHeaderContext = createContext<pageHeaderContextType | undefined>(undefined)

export const usePageHeader = () => {
    const context = useContext(pageHeaderContext)
    return context
}

interface PageHeaderProviderProps {
    children: ReactNode;
}

export const PageHeaderProvider = ({ children }: PageHeaderProviderProps) => {
    const [pageHeader, setPageHeader] = useState('')

    const updatePageHeader = (newHeader: string) => {
        setPageHeader(newHeader)
    }

    return (
        <pageHeaderContext.Provider value={{ pageHeader, updatePageHeader }}>
            {children}
        </pageHeaderContext.Provider>
    )
}