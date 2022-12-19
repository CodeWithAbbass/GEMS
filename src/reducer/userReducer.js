const UserReducer = (state, action) => {
  if (action.type === "SAVE_USER_INFO") {
    let user = action.payload;
    return {
      ...state,
      user: [...state.user, user],
    }
  }
  return state;
};

export default UserReducer;