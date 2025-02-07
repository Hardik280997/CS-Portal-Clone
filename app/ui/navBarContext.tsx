'use client'
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface NavBarContextType {
    isNavBarVisible: boolean,
    setNavBarVisible: () => void
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const useNavBar = () => {
    const context = useContext(NavBarContext)
    return context
}

interface NavbarProviderProps {
    children: ReactNode;
}

export const NavBarContextProvider = ({ children }: NavbarProviderProps) => {

    // let initialState = () => {
    //     let navBarState = localStorage.getItem('isNavBarVisible')
    //     return navBarState ? JSON.parse(navBarState) : false
    // }

    const [isNavBarVisible, setIsNavBarVisible] = useState<boolean>(false)

    useEffect(() => {
        // localStorage.setItem('isNavBarVisible', JSON.stringify(isNavBarVisible));
    }, [isNavBarVisible]);

    const setNavBarVisible = () => {
        setIsNavBarVisible(prevState => !prevState)
    }

    return (
        <NavBarContext.Provider value={{ isNavBarVisible, setNavBarVisible }}>
            {children}
        </NavBarContext.Provider>
    )
}

