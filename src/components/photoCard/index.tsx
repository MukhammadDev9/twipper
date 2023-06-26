import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { PhotoCardPropsI } from "./types";

const PhotoCard: FC<PhotoCardPropsI> = ({
    albumId,
    id,
    title,
    url,
    thumbnailUrl,
}) => {
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
                    src={url}
                    alt={title}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    width="100%"
                    height="100%"
                />
            </Box>
            <Typography>{title}</Typography>
        </Box>
    );
};

export default PhotoCard;
