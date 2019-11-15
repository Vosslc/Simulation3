// const  withRouter = 'react-router-dom'

const initialState = {
  user_id: '',
  username: '',
  profile_pic: ''
}

// ACTION CONSTANTS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

// ACTION BUILDERS
export function updateUserInfo(user_id, username, profile_pic) {
  return {
    type: UPDATE_USER_INFO,
    payload: {user_id, username, profile_pic}

  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_INFO:
      return {...state, ...action.payload}
    default: return state
  }
}