import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { mail, lockClosed, person } from "ionicons/icons";
import "../styles/Login.css";

const Test = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

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
           <h2 >Login</h2>
           <form action="#">
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={mail} />
               </span>
               <input type="email" required />
               <label>Email</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={lockClosed} />
               </span>
               <input type="password" required />
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
           <form action="#">
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={person} />
               </span>
               <input type="text" required />
               <label>Username</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={mail} />
               </span>
               <input type="email" required />
               <label>Email</label>
             </div>
             <div className="input-box">
               <span className="icon">
                 <IonIcon icon={lockClosed} />
               </span>
               <input type="password" required />
               <label>Password</label>
             </div>
             <div className="remember-forgot">
               <label>
                 <input type="checkbox" />I agree to the terms and conditions
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