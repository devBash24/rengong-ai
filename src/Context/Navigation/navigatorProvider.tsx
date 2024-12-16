"use client"
import { ReactNode, useState } from "react";
import { NavigationContext } from "./navigationContext";

import { useMediaQuery } from "react-responsive";



export interface INavigationContext {
    isSidebarOpen: boolean;
    toggleSidebar: () => void
    activeItem: string | null
    onSelectedItem: (id: string) => void
    isMobile: boolean
    isNavbarOpen: boolean
    toggleNavbar: () => void
 
    


}





const NavigationProvider = ({children}:{children: ReactNode}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });



    const onSelectedItem = (id: string) => {
        setActiveItem(id)
    }
    
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <NavigationContext.Provider value={{isNavbarOpen, toggleNavbar,isMobile,isSidebarOpen, toggleSidebar, activeItem, onSelectedItem}}>

            {children}
        </NavigationContext.Provider>
    )
}

export  default NavigationProvider