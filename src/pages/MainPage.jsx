import React from 'react';
import {AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    const gridCSS = {
        background: 'red',
        color: 'white',
        border: '1px solid black'
    }
    return (
        <>

            {/*<Grid container spacing={2}>*/}
            {/*    <Grid lg={3} md={6} sm={12} xs={12} sx={gridCSS}>*/}
            {/*        xs=8*/}
            {/*    </Grid>*/}
            {/*    <Grid lg={3} md={6} sm={12} xs={12} sx={gridCSS}>*/}
            {/*        xs=4*/}
            {/*    </Grid>*/}
            {/*    <Grid lg={3} md={6} sm={12} xs={12} sx={gridCSS}>*/}
            {/*        xs=4*/}
            {/*    </Grid>*/}
            {/*    <Grid lg={3} md={6} sm={12} xs={12} sx={gridCSS}>*/}
            {/*        xs=8*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            <Typography variant={'h1'} sx={{}}>APP</Typography>
            {Array.from({length: 10}, () => 0).map(item => (
                <Card sx={{maxWidth: 345}}>
                    <CardMedia
                        sx={{height: 140}}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
};

export default MainPage;
