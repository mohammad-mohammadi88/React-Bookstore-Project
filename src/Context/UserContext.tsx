import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const UserInfo = createContext<{IsLogin:boolean,token:string,username:string}>(initialState)
export const UserDispatch = createContext<any>(1)

export function useUserInfo(){
    const login = useContext(UserInfo)

    if(!login){
        throw new Error('we do not have login context')
    }

    return login
}

export function useUserDispatch(){
    const dispatch = useContext(UserDispatch)

    if(!dispatch){
        throw new Error('we do not have login context')
    }

    return dispatch
}

function UserProvider({children}:any) {
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <UserInfo.Provider value={state}>
            <UserDispatch.Provider value={dispatch}>
                {children}
            </UserDispatch.Provider>
        </UserInfo.Provider>
    )
}

export default UserProvider