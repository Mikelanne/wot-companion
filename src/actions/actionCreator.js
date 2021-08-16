import Types from '../constants/actionTypes'

export const ActionCreators = {
    addUser: (user) => ({type: Types.ADD_USER, payload: { user }}),
    login: (user) => ({type: Types.login, payload: { user} })
}