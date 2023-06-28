import type { FC } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { CommentCardProps } from "./types";

const CommentCard: FC<CommentCardProps> = ({ item, username }) => {
    return (
        <Box
            sx={{
                my: 1,
                width: "100%",
            }}
        >
            <Paper elevation={3} sx={{ mb: 2, py: 1, px: 2 }}>
                <Typography variant="body1" fontWeight={500} color={"#404040"}>
                    {username}
                </Typography>
                <Typography variant="body2" color={"primary"}>
                    {item.email}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
            </Paper>
        </Box>
    );
};

export default CommentCard;
