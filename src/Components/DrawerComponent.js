import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import logo from '../Images/Web3-Hub-Logo.svg';

const DrawerComponent = () => {
    const styles = {
        drawer: {
            backgroundColor: "rgba(0,0,0,0.8)",
        },
        links: {
            marginBottom: '50px',
            padding: '0 5px',
            width: 'fit-content',
        },
        activeLink: {
            color: '#FEC203',
            borderBottom: '2px solid #FEC203',
            marginBottom: '50px',
            padding: '0 5px',
            width: 'fit-content',
        },
        iconBtn: {
            color: "black",
            margin: '0 auto',
        },
    };
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerChange = () => {
        setOpenDrawer(false);
    };

    return (
        <div className="drawer-container">
            <Drawer
                open={openDrawer}
                onClose={handleDrawerChange}
                PaperProps={{
                    sx: {
                        backgroundColor: "black",
                        width: "300px",
                        padding: "20px 50px",
                    },
                    elevation: 20,
                }}
                sx={styles.drawer}
            >
                <List>
                    <ListItem sx={styles.activeLink}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link
                                to="/"
                                className="drawer-link active-drawer-link"
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="/services" className="drawer-link">
                                Services
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText >
                            <Link to="/about" className="drawer-link">
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="/contact" className="drawer-link">
                                Contact Us
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            <img src={logo} alt="Web3 Hub Logo" className="drawer-logo" />
            </Drawer>
            <IconButton
                sx={styles.iconBtn}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <FaBars style={{color: '#151515', }} />
            </IconButton>
        </div>
    );
};

export default DrawerComponent;
