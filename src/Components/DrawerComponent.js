import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa'

const DrawerComponent = () => {
    const styles = {
        drawer: {
            backgroundColor: "rgba(0,0,0,0.8)",
        },
        links: {
            borderBottom: "1px solid white",
            padding: "20px 0px",
        },
        contactLink: {
            marginTop: "20px",
            padding: "0px",
        },
        iconBtn: {
            color: "black",
        },
    };
    const [openDrawer, setOpenDrawer] = useState(true);

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
                    <ListItem sx={styles.links}>
                        <ListItemText >
                            <Link
                                to=""
                                className="drawer-link active-drawer-link"
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText >
                            <Link to="/about" className="drawer-link">
                                Services
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText >
                            <Link to="" className="drawer-link">
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText >
                            <Link to="/blog" className="drawer-link">
                                Contact Us
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                sx={styles.iconBtn}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <FaFacebook  />
            </IconButton>
        </div>
    );
};

export default DrawerComponent;
