import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { AppSpeedDial } from "../organisms";
import { PhotoCardPropsI } from "./types";

const PhotoCard: FC<PhotoCardPropsI> = ({ item }) => {
    return (
        <Box
            my={2}
            px={0}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
        >
            <Box
                position={"relative"}
                maxWidth={350}
                width="100%"
                maxHeight={350}
                height="100%"
            >
                <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    width="100%"
                    height="100%"
                />
            </Box>
            <Typography>{item.title}</Typography>
            <AppSpeedDial item={item} />
        </Box>
    );
};

export default PhotoCard;
