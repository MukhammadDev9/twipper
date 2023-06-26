import { FC } from "react";
import { PostCardPropsI } from "./types";
import { Box } from "@mui/material";

const PostCard: FC<PostCardPropsI> = ({ id, title, body, userId }) => {
    return (
        <Box sx={{ my: "1rem" }}>
            {title}
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
    );
};

export default PostCard;
