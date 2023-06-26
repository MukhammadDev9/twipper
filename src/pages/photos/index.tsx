import { FC } from "react";
import { Box } from "@mui/material";
import { PhotoCard, PhotoCardSkeleton } from "../../components";
import { useLoad } from "../../hooks/request";
import { photosGetUrl } from "../../utils/url";
import { GetResponseI, PhotosPropsI, ResponseData } from "./types";

const Photos: FC<PhotosPropsI> = ({}) => {
    const { response, loading } = useLoad<GetResponseI>({
        url: photosGetUrl(1, 10),
    });

    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            {loading
                ? [0, 1, 2, 3, 4, 5, 6].map((item) => (
                      <PhotoCardSkeleton key={item} />
                  ))
                : response?.map((item: ResponseData) => (
                      <PhotoCard key={item.id} {...item} />
                  ))}
        </Box>
    );
};

export default Photos;
