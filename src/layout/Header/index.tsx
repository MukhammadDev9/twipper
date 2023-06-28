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
                    py: 2,
                    pl: 2,
                    mb: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component={"h1"}
                    fontWeight={700}
                    letterSpacing={"1px"}
                    color={"primary"}
                >
                    Twipper
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
