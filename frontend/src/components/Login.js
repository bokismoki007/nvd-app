import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { mail, lockClosed, person } from "ionicons/icons";
import "../styles/Login.css";
import axios from "axios";

const Test = () => {
  const [isActive, setIsActive] = useState(false);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const Register = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword)
    try {
      const response = await axios.post('http://localhost:8080/api/register', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      alert(response.data);
      window.location.href="/login"
      // Handle success, e.g., redirect to another page
    } catch (error) {
      alert('Registration failed: ' + error.response.data);
      // Handle error, e.g., display an error message
    }
  }
  const Login = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
          'http://localhost:8080/api/login',
          formData,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
      );

      if (response.data.userStatus === 'LOGGED_IN') {
        const user = response.data;
        alert('Login successful');
        console.log(user)
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href="/";
        // Handle success, e.g., redirect to another page or update global authentication state
      } else {
        alert('Login failed');
        // Handle unsuccessful login, e.g., display an error message
      }
    } catch (error) {
      alert('Login failed: ' + error.response.data);
      // Handle error, e.g., display an error message
    }
  }
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate("/");
 };

   return (
     <div className="wrapper">
       <div className="go_back again" onClick={handleGoBack}>
         <img src="../../images/arrow.png" />
       </div>
       <div className={`wraps ${isActive ? "active" : ""}`}>
         <div className="form-box login">
           <h2>Login</h2>
           <form onSubmit={Login}>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={mail} />
               </span>
               <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
               <label>Email</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={lockClosed} />
               </span>
               <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
               <label>Password</label>
             </div>
             <div className="remember-forgot">
               <label>
                 <input type="checkbox" />
                 Remember me
               </label>
               <a href="#">Forgot Password?</a>
             </div>
             <button type="submit" className="btn button">
               Login
             </button>
             <div className="login-register">
               <p>
                 Don't have an account?{" "}
                 <a
                   href="#"
                   className="register-link"
                   onClick={handleRegisterClick}
                 >
                   Register
                 </a>
               </p>
             </div>
           </form>
         </div>


         <div className="form-box register">
           <h2 className="reg">Register</h2>
           <form onSubmit={Register}>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={person} />
               </span>
               <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
               <label>Username</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={mail} />
               </span>
               <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
               <label>Email</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={lockClosed} />
               </span>
               <input type="password" required onChange={(e) => {
                 setPassword(e.target.value);
                 setConfirmPassword(e.target.value);
               }}/>
               <label>Password</label>
             </div>
             <div className="remember-forgot">
               <label>
                 <input type="checkbox" required/>I agree to the terms and conditions
               </label>
             </div>
             <button type="submit" className="btn button">
               Register
             </button>
             <div className="login-register">
               <p>
                 Already have an account?{" "}
                 <a href="#" className="login-link" onClick={handleLoginClick}>
                   Login
                 </a>
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
};

export default Test;