import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState({
        "email": "",
        "password": "",
        "aboutMe": "",
        "birthdate": null,
        "address": {},
        "activeStep": 0
    });
    const [activeStep, setActiveStep] = useState(0);
    const [isLogged, setIsLogged] = useState(false);
    const [stepTwoComponent, setStepTwoComponent] = useState([1, 0, 0]);
    const [stepThreeComponent, setStepThreeComponent] = useState([0, 1, 1]);

    const value = {
        isLogged, setIsLogged,
        activeStep, setActiveStep,
        stepTwoComponent, setStepTwoComponent,
        stepThreeComponent, setStepThreeComponent,
        user, setUser
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;