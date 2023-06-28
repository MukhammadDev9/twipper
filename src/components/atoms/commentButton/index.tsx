import { useState, type FC } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Fab } from "@mui/material";

interface CommentButtonProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentButton: FC<CommentButtonProps> = ({ open, setOpen }) => {
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fab
            sx={{
                bgcolor: "#0066ff",
                color: "#ffffff",
                transition: "all .1s ease-in-out",
                ":hover": { bgcolor: "#0242a3" },
            }}
            aria-label="comment"
            size="small"
            variant="extended"
            onClick={open ? handleClose : handleOpen}
        >
            {open ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon />}
        </Fab>
    );
};

export default CommentButton;
