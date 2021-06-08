const initState = {
  list: [],
};

// ACTION TYPES
const USER_CREATE = "USER_CREATE";
// ACTIONS :: COmponents are interacting with this action
export function createUserAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT

    const url = "http://localhost:8080/api/Registration/UserRegistration";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    // dispatch({ type: USER_CREATE, payload: payload });
  };
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
