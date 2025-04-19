import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLogged, setIsLogged] = useState(false);
    const [stepTwoComponent, setStepTwoComponent] = useState([true, false, false]);
    const [stepThreeComponent, setStepThreeComponent] = useState([false, true, true]);

    const value = {
        isLogged, setIsLogged,
        activeStep, setActiveStep,
        stepTwoComponent, setStepTwoComponent,
        stepThreeComponent, setStepThreeComponent
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;