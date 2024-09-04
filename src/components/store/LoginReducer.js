import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "person",
  initialState: {
    // Creating an initial state for all.
    user: [],
    // All user will be stored in this session when registered
    authenticated: [],
    //authenticated will be used when someone triggers the login and isAuthenticated becomes true.
    //It will store the person logged in
    logged: false,
    //logged will be false initially as no one will be logged in
    error: false,
    //error will be false as no error would have been made to log in initially.
  },
  reducers: {
    //A user will be added when registered.
    addUser: (state, action) => {
      state.user.push(action.payload);
    },

    //A user with the correct userName (action.payload.user) will be added to the state.authenticated.
    //The isAuthenticated will also be true for the user and state.logged will also be true
    //If no user is found, then state.error will be triggered to be true
    login: (state, action) => {
      const index = state.user.findIndex(
        (person) => person.userName === action.payload.user
      );
      if (index !== -1) {
        state.user[index].isAuthenticated = true;
        if (state.user[index].isAuthenticated === true) {
          const loggedIn = state.user.splice(index, 1)[0];
          state.authenticated.push(loggedIn);
          state.logged = true;
        }
      } else {
        state.error = true;
      }
    },

    //logout will trigger user to be logged out of the system by removing the user from state.authenticated and returning back to state.user
    //isAuthenticated will also be false
    //state.logged will be false and will return back to the login page.
    logout: (state, action) => {
      const index = state.authenticated.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.authenticated[index].isAuthenticated = false;
        const loggedOut = state.authenticated.splice(index, 1)[0];
        state.user.push(loggedOut);
        state.logged = false;
      }
    },
  },
});

export const { addUser, login, logout } = loginSlice.actions;

export default loginSlice.reducer;
