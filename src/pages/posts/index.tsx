import { FC, useState } from "react";
import { Box } from "@mui/material";
import { PostCard, PostCardSkeleton } from "../../components";
import AppPagination from "../../components/pagination";
import { useLoad } from "../../hooks/request";
import { postsGetUrl } from "../../utils/url";
import { generateFakeArray } from "../../utils/utils";
import { GetResponseI, PageSettingsI, PostsProps, ResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page: 1,
        limit: 10,
    });
    const { response, loading } = useLoad<GetResponseI>(
        {
            url: postsGetUrl(pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );

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
                      <PostCardSkeleton key={item} />
                  ))
                : response?.map((item: ResponseData) => (
                      <PostCard key={item.id} {...item} />
                  ))}
            <AppPagination
                handleChange={setPageSettings}
                initial={pageSettings}
            />
        </Box>
    );
};

export default Posts;
