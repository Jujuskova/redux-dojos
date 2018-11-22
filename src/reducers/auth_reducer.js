function authReducer(state = {name: "hughus"}, action) { // le reducer est une fonction qui prend en argument un state et une action
  switch(action.type) { // le reducer prend toujours un switch
    case 'AUTH' : 
      return action.payloads
    default :
      return state
  }
}
export default authReducer;

// chaque reducer est propre a une action
