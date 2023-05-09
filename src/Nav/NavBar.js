import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        /* Nav bar item to display locations */
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link " to="/home">Home</Link>                          
            </li> 

            <li className="navbar_item">
                <Link className="navbar_link" to="/moviechat">Movie Chat</Link>                          
            </li> 
            <li className="navbar_item">
                <Link className="navbar_link" to="/explore">Explore</Link>                          
            </li>
            

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("Film_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
            }
