// import React from "react";
import { Button } from "antd";
import { auth, firebase } from "./firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      // Redirect to the dashboard after successful login
      history.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Log out and handle the necessary actions
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Login;
