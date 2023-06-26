import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Header />
            <Grid container spacing={2} sx={{ position: "relative" }}>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    {children}
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default Layout;
