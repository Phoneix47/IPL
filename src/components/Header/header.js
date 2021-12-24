import React  from "react";
import './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';


const Header = (props) =>{


    const logo = () =>{
        return(
            
            <Link to='/' className="logo">
                <img className="img" alt="ipl_logo" src="images/ipl-logo.png" />
            
            </Link>
            
        )
    }

    const navbar = () =>{
        return(
            <div className='bars'>

<SideNav {...props}/>

                <FontAwesome name="bars" 
                onClick={props.onOpenNav}
                style = {{
                    fontSize: "31px",
                    color: "White",
                    
                    paddingLeft: "10px",
                    cursor: "pointer",
                    marginTop: "20px"
                        
                }}/>
    
            </div>
        )
    }
    return(
        <header className="header">
            
            <div className="headerOpt">
            {navbar()}
            {logo()}

            </div>

        </header>
    )
}

export default Header;