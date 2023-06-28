import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { PhotoCard, PhotoCardSkeleton } from "../../components";
import { AppPagination } from "../../components";
import { useLoad } from "../../hooks/request";
import { photosGetUrl } from "../../utils/url";
import { getLocalItem, removeLocalItem, setLocalItem } from "../../utils/utils";
import {
    GetResponseI,
    PageSettingsI,
    PhotosPropsI,
    PhotoResponseData,
} from "./types";

const Photos: FC<PhotosPropsI> = ({}) => {
    const { id } = useParams();
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit:
            getLocalItem("limit") === "null"
                ? 10
                : Number(getLocalItem("limit")),
    });
    const { response, loading } = useLoad<GetResponseI>(
        {
            url: photosGetUrl(id, pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );

    useEffect(() => {
        if (
            getLocalItem("chapter") === "null" ||
            getLocalItem("chapter") !== "photos"
        ) {
            setLocalItem("chapter", "photos");
            removeLocalItem("page");
            removeLocalItem("limit");
        }
    }, []);

    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexWrap={"wrap"}
        >
            {loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <PhotoCardSkeleton key={item} />
                  ))
                : response?.map((item: PhotoResponseData) => (
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
