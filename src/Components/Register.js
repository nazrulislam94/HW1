import React from "react";
import '../Css/index.css';


function Register(){

    return(
        <div className="formMainDiv"> 
            <div className="box"> 
                <h5>SignUp Here...</h5>
                <form method="" action="">
                    <div className="inputBox"> 
                        <input type="text" name="userName" placeholder="Your First Name"  autoComplete="off" required />
                        <input type="text" name="userName" placeholder="Your Last Name"  autoComplete="off" required />
                        <input type="text" name="userName" placeholder="email"  autoComplete="off" required />
                        <input type="password" name="userName" placeholder=" Password "  autoComplete="off" required />
                        <input type="password" name="userName" placeholder="Re-type Password"  autoComplete="off" required />

                        
                    </div>
                    <input className="btn btn-success" type="submit" name="" value="Register" />
                </form>
            </div>
        </div>
        
    );

}

export default Register;