import { FC } from "react";
import { Box, Skeleton } from "@mui/material";

const PhotoCardSkeleton: FC = ({}) => {
    return (
        <Box m={2}>
            <Skeleton variant="rounded" width={150} height={150} />
        </Box>
    );
};

export default PhotoCardSkeleton;
