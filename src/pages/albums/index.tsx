import { type FC, useState } from "react";
import { Box } from "@mui/material";
import { AppPagination } from "../../components";
import { AlbumCardSkeleton } from "../../components/CardSkeletons";
import { AlbumCard } from "../../components/Cards";
import { useLoad } from "../../hooks/request";
import { albumsGetUrl } from "../../utils/url";
import { AlbumResponseData, AlbumsProps } from "./types";

const Albums: FC<AlbumsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<{
        page: number;
        limit: string;
    }>({
        page: 1,
        limit: "10",
    });
    const albumsRequest = useLoad(
        {
            url: albumsGetUrl(pageSettings.page, Number(pageSettings.limit)),
        },
        [pageSettings.page, pageSettings.limit]
    );

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
                page="album"
                pageSettings={pageSettings}
                setPageSettings={setPageSettings}
            />
        </Box>
    );
};

export default Albums;
