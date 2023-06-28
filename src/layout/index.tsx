import { FC } from "react";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutPropsI {
    children: React.ReactNode;
}

const Layout: FC<LayoutPropsI> = ({ children }) => {
    return (
        <Box flexGrow={1}>
            <Grid
                container
                spacing={5}
                display={"flex"}
                justifyContent={"space-between"}
            >
                <Grid xs={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100vh",
                            position: "fixed",
                            width: { xs: 340 },
                            bgcolor: "#fff",
                        }}
                    >
                        <Header />
                        <Sidebar />
                        <Footer />
                    </Paper>
                </Grid>
                <Grid xs={8}>{children}</Grid>
            </Grid>
        </Box>
    );
};

export default Layout;
