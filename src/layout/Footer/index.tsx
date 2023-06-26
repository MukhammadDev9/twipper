import React, { FC } from "react";
import { FooterPropsI } from "./types";
import { Box } from "@mui/material";

const Footer: FC<FooterPropsI> = ({}) => {
    return (
        <Box sx={{ position: "fixed", bottom: 0, right: 0, left: 0 }}>
            Footer
        </Box>
    );
};

export default Footer;
