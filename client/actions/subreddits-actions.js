import axios from 'axios'

export const getSubreddits = query => async dispatch => {
  const res = await axios
    .get(`https://www.reddit.com/r/${query}/new.json?limit=15`)
  dispatch({
    type: 'GET_SUBREDDITS',
    payload: res.data
  })
}
