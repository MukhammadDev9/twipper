import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CommentCardProps } from "./types";

const CommentCard: FC<CommentCardProps> = ({ item }) => {
    return (
        <Box
            sx={{
                my: 2,
                width: "100%",
                borderBottom: "2px solid #eeeeee",
            }}
        >
            <Typography>{item.name}</Typography>
            <Typography>{item.email}</Typography>
            <Typography>{item.body}</Typography>
        </Box>
    );
};

export default CommentCard;
