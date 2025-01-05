import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart_icon.png';
import { useContext } from 'react';
import { CategoryProducts } from '../../context/Context';
import { useState } from 'react';
function Navbar() {
    const { getTotalCartItems, islogin } = useContext(CategoryProducts);
    const [toggleNavLink, settoggleNavLink] = useState(false);
    console.log(toggleNavLink)
    return (
        <>

            <div className="navbar" >
                <div className="logo flex">
                    <img src={logo} alt="no image"></img>
                    <p>SHOPPER</p>
                </div>


                <div className="navlink">
                    <ul className={toggleNavLink === true ? "responsive-links" : ""}>
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "active-links" : "default-links"}>Shop</NavLink></li>
                        <li><NavLink to='/men' className={({ isActive }) => isActive ? "active-links" : "default-links"}>Men</NavLink></li>
                        <li><NavLink to='/women' className={({ isActive }) => isActive ? "active-links" : "default-links"}>Women</NavLink></li>
                        <li><NavLink to='/kids' className={({ isActive }) => isActive ? "active-links" : "default-links"}>Kids</NavLink></li>
                        <li> <NavLink to='/signuplogin'><button>{islogin === true ? "Logout" : "Login"}</button></NavLink></li>
                        <li className='cart flex'><NavLink to='/cart'><img src={cartIcon} alt="" /></NavLink><div className="counter">{getTotalCartItems()}</div></li>
                    </ul>
                </div>

                <div className="menu-icon">
                    <i class="fa-solid fa-bars" onClick={() => settoggleNavLink(!toggleNavLink)}></i>
                </div>
            </div>

        </>
    )
}
export default Navbar;