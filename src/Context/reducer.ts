import { produce } from "immer";
 
export interface state {
    IsLogin:boolean,
    token:string,
    username:string
}
export interface user {
    password:string,
    username:string
}
export const actionTypes: any = {
    LOGIN_USER_SUCCESS: "login/loginUserSuccess",
    LOGOUT_USER: "login/logoutUser",
    USER_CREATED: "login/userCreated",
}
export const initialState : state = {
    IsLogin: false,
    token:'',
    username:''
}
const reducer = produce((state:state,action:{type:string,payload:any})=>{
    switch (action.type) {
        case actionTypes.USER_CREATED:{
            state.IsLogin = true;
            state.token = '';
            state.username = action.payload;
            break;
        }
        case actionTypes.LOGIN_USER_SUCCESS:{
            state.IsLogin = true;
            state.token = action.payload.token;
            state.username = action.payload.username;
            break;
        }
        case actionTypes.LOGOUT_USER:{
            state.IsLogin = false;
            state.token = '';
            state.username = '';
            break;
        }
    }
})

export default reducer