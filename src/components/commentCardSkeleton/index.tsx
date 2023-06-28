import type { FC } from "react";
import { Box, Skeleton, Paper } from "@mui/material";

interface CommentCardSkeletonProps {}

const CommentCardSkeleton: FC<CommentCardSkeletonProps> = ({}) => {
    return (
        <Box
            sx={{
                my: 1,
                width: "100%",
            }}
        >
            <Paper sx={{ mb: 2, py: 1, px: 2 }}>
                <Skeleton
                    variant="rounded"
                    width={200}
                    height={20}
                    sx={{ mb: ".3rem" }}
                />
                <Skeleton
                    variant="rounded"
                    width={170}
                    height={15}
                    sx={{ mb: ".3rem" }}
                />
                <Skeleton variant="rounded" width={320} height={45} />
            </Paper>
        </Box>
    );
};

export default CommentCardSkeleton;
