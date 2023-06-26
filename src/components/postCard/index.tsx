import { FC } from "react";
import { Box } from "@mui/material";
import { PostCardPropsI } from "./types";

const PostCard: FC<PostCardPropsI> = ({ id, title, body, userId }) => {
    return (
        <Box sx={{ my: "1rem", maxWidth: 600, width: "100%" }}>
            {title}
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
    );
};

export default PostCard;
