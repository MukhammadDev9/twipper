import { type FC } from "react";
import { Box, Drawer, Typography } from "@mui/material";
import { PostForm } from "../../../Form";
import { PostDrawerProps } from "./types";

const PostEditDrawer: FC<PostDrawerProps> = ({
    open,
    toggleClose,
    item,
    userData,
    request,
}) => {
    return (
        <Drawer anchor="right" open={open} onClose={toggleClose}>
            <Box sx={{ width: 300, px: 3, pt: 3 }}>
                <Typography variant="h5" fontWeight={500} mb={2}>
                    Post Form
                </Typography>
                <PostForm
                    item={item}
                    userData={userData}
                    onClose={toggleClose}
                    request={request}
                />
            </Box>
        </Drawer>
    );
};

export default PostEditDrawer;
