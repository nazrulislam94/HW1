import React from "react";
import '../Css/index.css';


function Login(){
    return(
            <div className="LoginMainDiv"> 

                <div className="LoginFormDiv">
                    <p> If you have already an Account. please Login....</p>

                    <form method="" action="" >
                        <div className="inputbox2"> 
                            <input type="text" placeholder="User Name / Email" autoComplete="off" required name="username" />
                            <input type="password" placeholder="Password" autoComplete="off" required name="password" />
                        </div>
                        <input className="btn btn-success" type="submit" value="Login" />
                    </form>
                </div>
            </div>
    );
}

export default Login;