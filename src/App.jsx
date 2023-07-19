import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    createTheme,
    ThemeProvider,
    Typography
} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import React from "react";
import Layout from "./components/Layout/Layout.jsx";
import {orange} from "@mui/material/colors";

{/*
                    xl 1536px -
                    lg 1200px-1536px
                    md 900-1200px
                    sm 600-900px
                    xs 0-600
                    */
}
const theme = createTheme({
    status: {
        danger: orange[500],
    },
    typography: {
        // h1: {fontSize: {lg: '120px', md: '100px'}}
    }
});

theme.typography.h1 = {
    fontSize: '120px',
    [theme.breakpoints.only('md')]: {
        fontSize: '100px'
    }
}
function App() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={''} element={<MainPage/>}/>
                        <Route path={'about'} element={<AboutPage/>}/>
                    </Route>

                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
