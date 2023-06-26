import { Box, Skeleton } from "@mui/material";
import { FC } from "react";

const PostCardSkeleton: FC = () => {
    return (
        <Box sx={{ my: "1rem" }}>
            <Skeleton
                variant="rounded"
                width={200}
                height={15}
                sx={{ mb: ".6rem" }}
            />
            <Skeleton variant="rounded" width={600} height={60} />
        </Box>
    );
};

export default PostCardSkeleton;
