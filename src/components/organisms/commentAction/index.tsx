import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { CommentButton } from "../../Atoms";
import { AppCommentDrawer } from "../../Drawers";

interface CommentActionProps {
    postId: number;
    username: string;
}

const CommentAction: FC<CommentActionProps> = ({ postId, username }) => {
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
                    username={username}
                />
            )}
        </Box>
    );
};

export default CommentAction;
