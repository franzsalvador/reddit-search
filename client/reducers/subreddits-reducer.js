const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUBREDDITS':
      return action.payload.data.children
    default:
      return state
  }
}
