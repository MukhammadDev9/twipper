import { FC } from "react";
import { Box } from "@mui/material";
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
                <Grid xs={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100vh",
                            position: "fixed",
                            width: { xs: 260 },
                        }}
                    >
                        <Header />
                        <Sidebar />
                        <Footer />
                    </Box>
                </Grid>
                <Grid xs={9}>{children}</Grid>
            </Grid>
        </Box>
    );
};

export default Layout;
