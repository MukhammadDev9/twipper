import type { FC } from "react";
import { Box, Drawer } from "@mui/material";
import { Item } from "../../context";
import { useLoad } from "../../hooks/request";
import { commentsGetUrl } from "../../utils/url";
import CommentCard from "../commentCard";
import { CommentItem } from "../commentCard/types";
import CommentSkeleton from "../commentSkeleton";

interface AppCommentDrawerProps {
    open: boolean;
    toggleClose: () => void;
    postId: number;
}

const AppCommentDrawer: FC<AppCommentDrawerProps> = ({
    open,
    toggleClose,
    postId,
}) => {
    const commentRequest = useLoad({
        url: commentsGetUrl(postId),
    });

    return (
        <Drawer anchor="right" open={open} onClose={toggleClose}>
            <Box sx={{ width: 370, px: 3, pt: 3 }}>
                {commentRequest.loading
                    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
                          <CommentSkeleton key={item} />
                      ))
                    : commentRequest.response?.map((item: CommentItem) => (
                          <CommentCard key={item.id} item={item} />
                      ))}
            </Box>
        </Drawer>
    );
};

export default AppCommentDrawer;
