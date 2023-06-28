import { FC } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { PhotoCardPropsI } from "./types";

const PhotoCard: FC<PhotoCardPropsI> = ({ item }) => {
    return (
        <Paper
            elevation={4}
            sx={{
                m: 1,
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            {item ? (
                <Box
                    position={"relative"}
                    maxWidth={150}
                    width="100%"
                    maxHeight={150}
                    height="100%"
                >
                    <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                    />
                </Box>
            ) : (
                <Skeleton variant="rounded" width={150} height={150} />
            )}
        </Paper>
    );
};

export default PhotoCard;
