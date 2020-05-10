import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA ';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            };
        default:
            return state
    }
};

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });
export const getAuthUserDataTC = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    })
};

export const loginTC = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        }
    })
};

export const logoutTC = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    })
};

export default authReducer;