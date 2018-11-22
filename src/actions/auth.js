export const AUTH = (userData) => {
  return ({
  type: 'AUTH', // obligatoire - donne un nom à l'action
  payloads: userData // doit être un objet
})
};

// les actions peuvent également être définies en temps que simple objet

const Action = {
  type: 'ACTION_OBJECT',
  id: 5,
  payload: {
    product : "duck",
    price : 30
  }
}