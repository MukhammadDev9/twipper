import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { PhotoCard, PhotoCardSkeleton } from "../../components";
import AppPagination from "../../components/pagination";
import { useLoad } from "../../hooks/request";
import { photosGetUrl } from "../../utils/url";
import {
    GetResponseI,
    PageSettingsI,
    PhotosPropsI,
    ResponseData,
} from "./types";

const Photos: FC<PhotosPropsI> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            localStorage.getItem("page") === null
                ? 1
                : Number(localStorage.getItem("page")),
        limit:
            localStorage.getItem("limit") === null
                ? 10
                : Number(localStorage.getItem("limit")),
    });
    const { response, loading } = useLoad<GetResponseI>(
        {
            url: photosGetUrl(pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );

    useEffect(() => {
        if (
            localStorage.getItem("chapter") === null ||
            localStorage.getItem("chapter") !== "photos"
        ) {
            localStorage.setItem("chapter", "photos");
            localStorage.removeItem("page");
            localStorage.removeItem("limit");
        }
    }, []);

    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            {loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <PhotoCardSkeleton key={item} />
                  ))
                : response?.map((item: ResponseData) => (
                      <PhotoCard key={item.id} item={item} />
                  ))}

            <AppPagination
                handleChange={setPageSettings}
                initial={pageSettings}
            />
        </Box>
    );
};

export default Photos;
