import type { FC } from "react";
import { Box, Skeleton } from "@mui/material";

interface CommentSkeletonProps {}

const CommentSkeleton: FC<CommentSkeletonProps> = ({}) => {
    return (
        <Box sx={{ my: "1rem", px: 0 }}>
            <Skeleton
                variant="rounded"
                width={100}
                height={10}
                sx={{ mb: ".3rem" }}
            />
            <Skeleton
                variant="rounded"
                width={100}
                height={10}
                sx={{ mb: ".3rem" }}
            />
            <Skeleton variant="rounded" width={150} height={25} />
        </Box>
    );
};

export default CommentSkeleton;
