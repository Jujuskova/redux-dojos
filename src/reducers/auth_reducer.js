function authReducer(state = {name: "hughus"}, action) {
  switch(action.type) {
    case 'AUTH' : 
      return action.payloads
    default :
      return state
  }
}
export default authReducer;