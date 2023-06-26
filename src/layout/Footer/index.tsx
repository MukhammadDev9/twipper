import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { FooterPropsI } from "./types";

const Footer: FC<FooterPropsI> = ({}) => {
    return (
        <Box
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            height={60}
            bgcolor={"#ffffff"}
        >
            <Typography>
                Made by:{" "}
                <a href="https://github.com/MukhammadDev9">mukhammadDev</a>
            </Typography>
        </Box>
    );
};

export default Footer;
