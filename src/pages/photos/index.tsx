import { type FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { AppPagination } from "../../components";
import { PhotoCardSkeleton } from "../../components/CardSkeletons";
import { PhotoCard } from "../../components/Cards";
import { PageSettingsI } from "../../components/Pagination/types";
import { useLoad } from "../../hooks/request";
import { photosGetUrl } from "../../utils/url";
import { getLocalItem } from "../../utils/utils";
import { GetResponseI, PhotosPropsI, PhotoResponseData } from "./types";

const Photos: FC<PhotosPropsI> = ({}) => {
    const { id } = useParams();
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit: getLocalItem("page") === "null" ? "10" : getLocalItem("limit"),
    });
    const { response, loading } = useLoad<GetResponseI>(
        {
            url: photosGetUrl(
                id,
                pageSettings.page,
                Number(pageSettings.limit)
            ),
        },
        [pageSettings.page, pageSettings.limit]
    );

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
                page="photo"
                pageSettings={pageSettings}
                setPageSettings={setPageSettings}
            />
        </Box>
    );
};

export default Photos;
