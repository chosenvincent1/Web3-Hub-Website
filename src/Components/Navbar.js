import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import DrawerComponent from './DrawerComponent';

import { 
    AppBar,
    Toolbar,
    useTheme,
    useMediaQuery,
} from '@mui/material'; 


const Navbar = ()=> {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar
                elevation={0}
                position='relative'
                sx={{
                    padding: '0px 20px',
                    background: '#f5f5f5'
                }}
            >
                <Toolbar>
                    <div className='logo-container'>
                        <img src='./Images/Web3-Hub-Logo.svg' alt='Web3 Logo' className='logo'/>
                    </div>
                    
                    { mobileView ? (
                        <DrawerComponent />
                    ) : (
                       
                        <div className='nav-link-container'>
                            <div className='first-link-container'>
                                <Link to='/' className='nav-link active-link'>Home</Link>
                                <Link to='/services' className='nav-link'>Services</Link>
                                <Link to='/about' className='nav-link'>About</Link>
                            </div>
                            <div className='contact-link-container'>
                                <Link to='/faq' className='nav-link'>FAQ</Link>
                                <Link to='/contact' className='nav-link contact-link'>Contact Us</Link>
                            </div>
                        </div>
                    )}
                    
                    
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar