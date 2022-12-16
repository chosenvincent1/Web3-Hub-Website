import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

import { 
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';

const Navbar = ()=> {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h4'>Logo</Typography>
                    <div className='nav-link-container'>
                        <Link to='' className='nav-link'>Home</Link>
                        <Link to='' className='nav-link'>Home</Link>
                        <Link to='' className='nav-link'>Home</Link>
                        <Link to='' className='nav-link'>Home</Link>
                    </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar