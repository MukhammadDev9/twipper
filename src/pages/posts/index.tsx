import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { AppPagination } from "../../components";
import { PostCardSkeleton } from "../../components/CardSkeletons";
import { PostCard } from "../../components/Cards";
import { AddAction } from "../../components/Organisms";
import { PageSettingsI } from "../../components/Pagination/types";
import { useLoad } from "../../hooks/request";
import { postsGetUrl, usersGetUrl } from "../../utils/url";
import { getLocalItem } from "../../utils/utils";
import { PostsProps, PostResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit: getLocalItem("page") === "null" ? "10" : getLocalItem("limit"),
    });
    const postsRequest = useLoad(
        {
            url: postsGetUrl(pageSettings.page, Number(pageSettings.limit)),
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
                    forPage="post"
                    userData={usersRequest.response}
                    request={postsRequest.request}
                />
            </Box>
            {postsRequest.loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <PostCardSkeleton key={item} />
                  ))
                : postsRequest.response?.map((item: PostResponseData) => (
                      <PostCard
                          key={item.id}
                          item={item}
                          userList={usersRequest.response}
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
