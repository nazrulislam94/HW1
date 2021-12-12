import React from "react";
import '../Css/index.css';
import Nazrul from '../Photo/Nazrul.jpg';

function AboutMe(){
    return(
        <div className="aboutMainDiv">

            <div className="aboutDiv2">
               
                    <img className="" src={ Nazrul} alt="Nazrul" height="300px" />

                    <address>
                    Name: Md. Nazrul Islam <br />
                    Phone: 01888799444 <br />
                    Email: nazrulislam94bd@gmail.com<br />
                    Address: House-782, Ward-03, Dhamura, Uzipur, Barisal.
                </address>   
              
            </div>

           
            
        </div>
    );
}
export default AboutMe;