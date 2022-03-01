import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css'
import UserOptions from './UserOptions';
import axios from 'axios';
import WebFont from 'webfontloader';
import store from '../../../store';
import logo from '../../../images/logo.png'
import { loadUser } from '../../../actions/userAction';

const Navbar = () => {
     const { isAuthenticated, user } = useSelector((state) => state.user);

    const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);
    
    
    return (
        <div  className='navbar_container'>
            <div className='navbar_content_section'>
                <div className='navbar_logo'>
                    <Link to='/'>
                        <img src={logo} alt="image" />
                  </Link>
                </div>
                <div className='navbar_shop_menu'>
                   <Link className='menu_name' to="/">Home</Link>
                   <Link className='menu_name' to="/products">Shop</Link>
                   <Link className='menu_name' to="/contact"> Contact</Link>
                    <Link className='menu_name' to='/about'> About</Link>
                </div>
                <div className='navbar_user_manu'>
                
                </div>
                <div className='navbar_user_menu_admin'>
                    
                    <Link className='menu_name' to="/search">Search</Link>
                   <Link className='menu_name' to="/cart"> Cart</Link>
                   <Link style={{marginRight:'50px'}} className='menu_name' to='/login'> Login</Link>
                 
                   {isAuthenticated && <UserOptions user={user} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;