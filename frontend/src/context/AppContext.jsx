import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLogged, setIsLogged] = useState(false);
    const [pageTwoComponent, setPageTwoComponent] = useState([true, false, false]);
    const [pageThreeComponent, setPageThreeComponent] = useState([false, true, false]);

    const value = {
        isLogged, setIsLogged,
        activeStep, setActiveStep,
        pageTwoComponent, setPageTwoComponent,
        pageThreeComponent, setPageThreeComponent
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;