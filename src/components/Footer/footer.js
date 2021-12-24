import React from "react";
import './footer.css';
import {Link} from 'react-router-dom';

var date = new Date();
var n = date.getFullYear();




const Footer = () =>{
    return(
<>
       
        <div className="footer">
        <Link to='/' className="logo">

<img className="img2" alt="ipl_logo" src="images/ipl-logo.png" />
</Link>
            IPL {n} all rights reserved
        </div>
        </>
    )
}

export default Footer;