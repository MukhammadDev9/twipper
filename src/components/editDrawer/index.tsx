import { type FC } from "react";
import { Box, Drawer } from "@mui/material";
import { PhotoResponseData } from "../../pages/photos/types";
import { PostResponseData } from "../../pages/posts/types";
import PostsForm from "../form/postsForm";

interface AppDrawerProps {
    forPage: string;
    open: boolean;
    toggleClose: () => void;
    item: PostResponseData & PhotoResponseData;
    userDataId: number;
}

const AppEditDrawer: FC<AppDrawerProps> = ({
    forPage,
    open,
    toggleClose,
    item,
    userDataId,
}) => {
    return (
        <Drawer anchor="right" open={open} onClose={toggleClose}>
            <Box sx={{ width: 300, px: 3, pt: 3 }}>
                {open && forPage === "posts" && (
                    <PostsForm item={item} userDataId={userDataId} />
                )}
            </Box>
        </Drawer>
    );
};

export default AppEditDrawer;
