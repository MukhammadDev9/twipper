import React, { FC } from "react";
import { HeaderPropsI } from "./types";
import { Box } from "@mui/material";

const Header: FC<HeaderPropsI> = ({}) => {
    return (
        <Box sx={{ position: "fixed", top: 0 }}>
            <Box
                sx={{
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    bgcolor: "#000",
                }}
            >
                Twipper
            </Box>
        </Box>
    );
};

export default Header;
