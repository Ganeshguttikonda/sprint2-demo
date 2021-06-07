const initState = {
  list: [],
};

// ACTION TYPES
const USER_CREATE = "USER_CREATE";

// ACTIONS :: COmponents are interacting with this action
export function createUserAction(payload) {
  return { type: USER_CREATE, payload: payload };
}

// REDUCER LOGIC
export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_CREATE:
      return { ...state, list: [action.payload, ...state.list] };

    default:
      return state;
  }
}
