import { FC } from "react";
import { Box, Skeleton } from "@mui/material";

const PostCardSkeleton: FC = ({}) => {
    return (
        <Box sx={{ my: "1rem", px: 0 }}>
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
