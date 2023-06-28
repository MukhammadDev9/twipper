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
            <Typography variant="body1" fontWeight={500}>
                Made by:{" "}
                <Typography
                    color="primary"
                    component={"a"}
                    href="https://github.com/MukhammadDev9"
                    target="_blank"
                    fontWeight={500}
                >
                    mukhammadDev
                </Typography>
            </Typography>
        </Box>
    );
};

export default Footer;
