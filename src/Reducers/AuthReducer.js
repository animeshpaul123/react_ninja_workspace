export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT = "LOGOUT"
export const TOKEN = "token"

export default function AuthReducer(prevState, action) {
    const { payload = {} } = action

    switch (action.type) {
        case LOGIN_SUCCESS: {
            const { data } = payload
            if (data && typeof data === "object") {
                localStorage.setItem(TOKEN, JSON.stringify(data))
            }
            return {
                ...prevState,
                isAuthenticated: true
            }
        }
        case LOGOUT: {
            localStorage.clear()
            return {
                ...prevState,
                isAuthenticated: false
            }
        }
        default: return prevState
    }
}
