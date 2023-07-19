import React from 'react';
import {AppBar, Box} from "@mui/material";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    const linkCSS = {
        color: 'white',
        textDecoration: 'none',
        padding: '20px'
    }
    return (
        <>
            <AppBar position={'static'} sx={{

            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',

                }} >
                    <NavLink to={'/'} style={linkCSS}>
                        MAIN
                    </NavLink>
                    <NavLink to={'/about'} style={{...linkCSS, marginLeft: '20px'}}>
                        ABOUT
                    </NavLink>

                </Box>
                {/*<Box component={'img'} sx={{*/}
                {/*    width: {lg: '100px', md: '150px', sm: '100px'}*/}
                {/*}}/>*/}
            </AppBar>

            <Outlet/>
        </>

    );
};

export default Layout;
