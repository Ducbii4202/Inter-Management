import React from "react";
import { Button } from "antd";
import { auth, firebase } from "./firebase";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      // Đăng nhập thành công, thực hiện các thao tác khác nếu cần
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Đăng xuất thành công
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
