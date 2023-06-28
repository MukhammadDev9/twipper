import type { FC } from "react";
import { Box, Drawer, Typography } from "@mui/material";
import { CommentCard, CommentCardSkeleton } from "../../components";
import { useLoad } from "../../hooks/request";
import { commentsGetUrl } from "../../utils/url";
import { CommentItem } from "../commentCard/types";

interface AppCommentDrawerProps {
    open: boolean;
    toggleClose: () => void;
    postId: number;
    username: string;
}

const AppCommentDrawer: FC<AppCommentDrawerProps> = ({
    open,
    toggleClose,
    postId,
    username,
}) => {
    const commentRequest = useLoad({
        url: commentsGetUrl(postId),
    });

    return (
        <Drawer anchor="right" open={open} onClose={toggleClose}>
            <Box sx={{ width: 370, px: 3, pt: 3 }}>
                <Typography
                    variant="h4"
                    color="#404040"
                    fontWeight={500}
                    component={"h5"}
                    mb={2}
                >
                    Comments
                </Typography>
                {commentRequest.loading
                    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
                          <CommentCardSkeleton key={item} />
                      ))
                    : commentRequest.response?.map((item: CommentItem) => (
                          <CommentCard
                              key={item.id}
                              item={item}
                              username={username}
                          />
                      ))}
            </Box>
        </Drawer>
    );
};

export default AppCommentDrawer;
