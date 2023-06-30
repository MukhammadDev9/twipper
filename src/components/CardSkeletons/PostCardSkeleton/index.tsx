import { FC } from "react";
import { Box, Paper, Skeleton } from "@mui/material";

const PostCardSkeleton: FC = ({}) => {
    return (
        <Paper
            elevation={3}
            sx={{ my: 2, maxWidth: 600, width: "100%", py: 2, px: 3 }}
        >
            <Skeleton
                variant="rounded"
                width={200}
                height={20}
                sx={{ mb: 1 }}
            />
            <Skeleton
                variant="rounded"
                width={600}
                height={45}
                sx={{ mb: 1 }}
            />
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" columnGap={2}>
                    <Skeleton variant="circular" width={33} height={33} />
                    <Skeleton variant="circular" width={33} height={33} />
                </Box>
                <Box display="flex" columnGap={2}>
                    <Skeleton variant="circular" width={33} height={33} />
                    <Skeleton variant="circular" width={33} height={33} />
                </Box>
            </Box>
        </Paper>
    );
};

export default PostCardSkeleton;
