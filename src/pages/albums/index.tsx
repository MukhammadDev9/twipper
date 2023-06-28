import { useState, type FC, useEffect } from "react";
import { Box } from "@mui/material";
import { AlbumCard, AlbumCardSkeleton } from "../../components";
import { AppPagination } from "../../components";
import { useLoad } from "../../hooks/request";
import { albumsGetUrl } from "../../utils/url";
import { getLocalItem, removeLocalItem, setLocalItem } from "../../utils/utils";
import { AlbumResponseData, AlbumsProps, PageSettingsI } from "./types";

const Albums: FC<AlbumsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit:
            getLocalItem("limit") === "null"
                ? 10
                : Number(getLocalItem("limit")),
    });
    const albumsRequest = useLoad(
        {
            url: albumsGetUrl(pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );

    useEffect(() => {
        if (
            getLocalItem("chapter") === "null" ||
            getLocalItem("chapter") !== "posts"
        ) {
            setLocalItem("chapter", "posts");
            removeLocalItem("page");
            removeLocalItem("limit");
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
            {albumsRequest.loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <AlbumCardSkeleton key={item} />
                  ))
                : albumsRequest.response?.map((item: AlbumResponseData) => (
                      <AlbumCard
                          key={item.id}
                          item={item}
                          request={albumsRequest.request}
                      />
                  ))}
            <AppPagination
                handleChange={setPageSettings}
                initial={pageSettings}
            />
        </Box>
    );
};

export default Albums;
