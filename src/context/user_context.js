import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/userReducer";


const UserContext = createContext();

const initialState = {
    user: [
        {
            id: 123456,
            email: "A@gmail.com",
            emailMe: "Yes",
            country: "PK",
            fName: "Abbas",
            lName: "Ali",
            address: "Lahore",
            apartment: "Lahore",
            city: "Lahore",
            postalCode: "12345",
            phone: "03016083148",
            saveInfoCheckbox: "Yes",
        }
    ],
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const SaveFillingUserInfo = (userInfo) => {
        dispatch({ type: "SAVE_USER_INFO", payload: userInfo })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    return (
        <UserContext.Provider value={{
            ...state,
            SaveFillingUserInfo,
        }}>
            {children}
        </UserContext.Provider>
    );
};

// custom hook
const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, UserContext, useUserContext };