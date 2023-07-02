import { type FC, useState } from "react";
import { Box } from "@mui/material";
import { AppPagination } from "../../components";
import { AlbumCardSkeleton } from "../../components/CardSkeletons";
import { AlbumCard } from "../../components/Cards";
import { AddAction } from "../../components/Organisms";
import { PageSettingsI } from "../../components/Pagination/types";
import { useLoad } from "../../hooks/request";
import { albumsGetUrl, usersGetUrl } from "../../utils/url";
import { getLocalItem } from "../../utils/utils";
import { AlbumResponseData, AlbumsProps } from "./types";

const Albums: FC<AlbumsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit: getLocalItem("page") === "null" ? "10" : getLocalItem("limit"),
    });
    const albumsRequest = useLoad(
        {
            url: albumsGetUrl(pageSettings.page, Number(pageSettings.limit)),
        },
        [pageSettings.page, pageSettings.limit]
    );
    const usersRequest = useLoad({
        url: usersGetUrl,
    });

    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            py={2}
        >
            <Box display={"flex"} justifyContent={"center"}>
                <AddAction
                    item={null}
                    forPage="album"
                    userData={usersRequest.response}
                    request={albumsRequest.request}
                />
            </Box>
            {albumsRequest.loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <AlbumCardSkeleton key={item} />
                  ))
                : albumsRequest.response?.map((item: AlbumResponseData) => (
                      <AlbumCard
                          key={item.id}
                          item={item}
                          userList={usersRequest.response}
                          request={albumsRequest.request}
                      />
                  ))}
            <AppPagination
                page="album"
                pageSettings={pageSettings}
                setPageSettings={setPageSettings}
            />
        </Box>
    );
};

export default Albums;
