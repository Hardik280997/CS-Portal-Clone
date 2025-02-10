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
    const [isNavBarVisible, setIsNavBarVisible] = useState<boolean>(false)

    useEffect(() => {
        const navBarState = localStorage.getItem('isNavBarVisible');
        if (navBarState) {
            setIsNavBarVisible(JSON.parse(navBarState))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isNavBarVisible', JSON.stringify(isNavBarVisible));
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

