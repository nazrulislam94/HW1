import React from "react";
import '../Css/index.css';
import Nazrul from '../Photo/Nazrul.jpg';

function Contact(){
    return(
        <div className="contactMainDiv">
            <div className="contactArea row">
                <div className="col-md-6 col-sm-12">
                <h3> Contact Us</h3>
                <p>Bangladesh is a unitary parliamentary democracy and constitutional republic ....</p>
                    <form  method="" action="">
                       <div className="inputArea03">
                            <input type="text" placeholder="Enter Your Name" required autoComplete="off" />
                            <input type="text" placeholder="Enter Your Valid Email Address" required autoComplete="off" />
                            <textarea required placeholder="Enter Your Message...."></textarea>
                       </div>
                       <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12 contactAreaDiv2">
                        <img className="" src={ Nazrul} alt="Nazrul" />

                        <address>
                            Md. Nazrul Islam <br />
                            Phone : 01888799444<br />
                            Email : nazrulislam94bd@gmail.com<br />
                            Address : House:782, Ward:03, West Dhamura, Uzipur, Barisal.
                        </address>

                </div>
            </div>
        </div>
    );
}

export default Contact;