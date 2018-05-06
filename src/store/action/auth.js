import { FB } from "../../firebase";
export const USER_SESSION = "USER_SESSION";

// create new user
function createUser(email, password) {
  return FB().then(auth => {
    return auth.createUserWithEmailAndPassword(email, password);
  })
}
// login user 
function login(email, password) {
  return FB().then(auth => {
    return auth.signInWithEmailAndPassword(email, password);
  })
}
// logout user
function logout() {
  return FB().then(auth => {
    return auth.signOut();
  })
}

// password reset 
function resetPassword(email) {
  return FB().then(auth => {
    return auth.sendPasswordResetEmail(email);
  })
}

export const signUp = (email, password) => {
  console.log(email,password);
  return async (dispatch) => {
    const currentUser = await createUser(email, password);
    localStorage.setItem("user", JSON.stringify(currentUser));
    return dispatch({type: USER_SESSION, payload: currentUser});
  }
}

export const signin = (email, pwd) => {
  return async (dispatch) => {
    const currentUser = await login(email, pwd);
    localStorage.setItem("user", JSON.stringify(currentUser));
    return dispatch({type: USER_SESSION, payload: currentUser});
  }
}


export const signout = () => {
  return async (dispatch) => {
    await logout()
    localStorage.removeItem("user");
    return dispatch({type: USER_SESSION, payload: null})
  }
}

