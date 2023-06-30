import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { AppPagination } from "../../components";
import { PostCardSkeleton } from "../../components/CardSkeletons";
import { PostCard } from "../../components/Cards";
import { useLoad } from "../../hooks/request";
import { postsGetUrl } from "../../utils/url";
import { PostsProps, PostResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<{
        page: number;
        limit: string;
    }>({
        page: 1,
        limit: "10",
    });
    const postsRequest = useLoad(
        {
            url: postsGetUrl(pageSettings.page, Number(pageSettings.limit)),
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
            {postsRequest.loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <PostCardSkeleton key={item} />
                  ))
                : postsRequest.response?.map((item: PostResponseData) => (
                      <PostCard
                          key={item.id}
                          item={item}
                          request={postsRequest.request}
                      />
                  ))}
            <AppPagination
                page="post"
                pageSettings={pageSettings}
                setPageSettings={setPageSettings}
            />
        </Box>
    );
};

export default Posts;
