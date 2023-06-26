import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { HeaderPropsI } from "./types";

const Header: FC<HeaderPropsI> = ({}) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    bgcolor: "#fff",
                    py: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Twipper
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
