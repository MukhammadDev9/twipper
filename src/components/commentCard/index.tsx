import type { FC } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { CommentCardProps } from "./types";

const CommentCard: FC<CommentCardProps> = ({ item }) => {
    return (
        <Box
            sx={{
                my: 1,
                width: "100%",
            }}
        >
            <Paper sx={{ mb: 2, py: 1, px: 2 }}>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="subtitle2">{item.email}</Typography>
                <Typography variant="inherit">{item.body}</Typography>
            </Paper>
        </Box>
    );
};

export default CommentCard;
