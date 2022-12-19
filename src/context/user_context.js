import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/userReducer";


const UserContext = createContext();

const initialState = {
    user: [
        {
            id: 123456,
            email: "A@gmail.com",
            country: "PK",
            fName: "Abbas Ali",
            lName: "Developer",
            address: "Thokar Niaz Baig Lahore",
            city: "Lahore",
            state: "Punjab",
            phone: "03016083148",
        }
    ],
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const SaveUserInfo = (userInfo) => {
        dispatch({ type: "SAVE_USER_INFO", payload: userInfo });
        return userInfo;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    return (
        <UserContext.Provider value={{
            ...state,
            SaveUserInfo,
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