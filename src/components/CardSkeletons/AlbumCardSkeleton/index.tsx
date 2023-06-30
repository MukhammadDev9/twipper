import type { FC } from "react";
import { Paper, Skeleton, Box } from "@mui/material";

interface AlbumCardSkeletonProps {}

const AlbumCardSkeleton: FC<AlbumCardSkeletonProps> = ({}) => {
    return (
        <Paper
            elevation={3}
            sx={{ my: 2, maxWidth: 550, width: "100%", py: 2, px: 3 }}
        >
            <Skeleton
                variant="rounded"
                width={200}
                height={20}
                sx={{ mb: 1 }}
            />
            <Skeleton
                variant="rounded"
                width={500}
                height={25}
                sx={{ mb: 1 }}
            />
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" columnGap={2}>
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

export default AlbumCardSkeleton;
