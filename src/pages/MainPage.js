import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Content from '../components/Content/Content';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar/Sidebar';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
    return (
        <MainLayout>
            <Box p={5}>
                <Grid container spacing={3}>
                     <Slider/>
                    <Sidebar />
                    <Content />
                    <Footer/>
                </Grid>
            </Box>
        </MainLayout>
    );
};

export default MainPage;
