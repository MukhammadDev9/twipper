import { useState, type FC } from "react";
import { Box } from "@mui/material";
import CommentButton from "../../atoms/commentButton";
import AppCommentDrawer from "../../commentDrawer";

interface CommentActionProps {
    postId: number;
}

const CommentAction: FC<CommentActionProps> = ({ postId }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleClose = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <Box onClick={toggleClose} display={"inline"}>
                <CommentButton open={open} setOpen={setOpen} />
            </Box>
            {open && (
                <AppCommentDrawer
                    open={open}
                    toggleClose={toggleClose}
                    postId={postId}
                />
            )}
        </Box>
    );
};

export default CommentAction;
