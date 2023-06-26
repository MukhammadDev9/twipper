import { FC } from "react";
import { Box, Skeleton } from "@mui/material";

const PhotoCardSkeleton: FC = ({}) => {
    return (
        <Box sx={{ my: 2, px: 0 }}>
            <Skeleton
                variant="rounded"
                width={400}
                height={400}
                sx={{ mb: ".6rem" }}
            />
            <Skeleton variant="rounded" width={400} height={60} />
        </Box>
    );
};

export default PhotoCardSkeleton;
