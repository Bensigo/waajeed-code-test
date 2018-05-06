import Firebase from "../../firebase";

export const USER_SESSION = "USER_SESSION";


const auth = Firebase.auth();
// create new user
async function createUser(email, password) {
  return  await auth.createUserWithEmailAndPassword(email, password);
}
// login user 
async function login(email, password) {
  return await auth.signInWithEmailAndPassword(email, password);
}
// logout user
async function logout() {
  return await auth.signOut();
}

// password reset 
async function resetPassword(email) {
  return await auth.sendPasswordResetEmail(email)
}



