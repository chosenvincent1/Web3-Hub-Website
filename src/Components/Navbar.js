import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import DrawerComponent from './DrawerComponent';

import { 
    AppBar,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery
} from '@mui/material';


const Navbar = ()=> {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar
                elevation={0}
                position='relative'
                sx={{padding: '0px 20px'}}
            
            >
                <Toolbar>
                    <Typography variant='h4' sx={{ marginRight: 'auto'}}>Logo</Typography>
                    { mobileView ? (
                        <DrawerComponent />
                    ) : (
                        <div className='nav-link-container'>
                            <Link to='' className='nav-link'>Home</Link>
                            <Link to='' className='nav-link'>Services</Link>
                            <Link to='' className='nav-link'>About</Link>
                            <Link to='' className='nav-link'>Contact Us</Link>
                        </div>
                    )}
                    
                    
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar