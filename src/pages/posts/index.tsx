import { FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { PostCard, PostCardSkeleton } from "../../components";
import { AppPagination } from "../../components";
import SearchBar from "../../components/searchBar";
import { useLoad } from "../../hooks/request";
import { postsGetUrl, usersGetUrl } from "../../utils/url";
import { getLocalItem, removeLocalItem, setLocalItem } from "../../utils/utils";
import { PageSettingsI, PostsProps, PostResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
    const [pageSettings, setPageSettings] = useState<PageSettingsI>({
        page:
            getLocalItem("page") === "null" ? 1 : Number(getLocalItem("page")),
        limit:
            getLocalItem("limit") === "null"
                ? 10
                : Number(getLocalItem("limit")),
    });
    const postsRequest = useLoad(
        {
            url: postsGetUrl(pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );
    const usersRequest = useLoad(
        {
            url: usersGetUrl,
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
            <SearchBar />
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
                          usersRequest={usersRequest.request}
                      />
                  ))}
            <AppPagination
                handleChange={setPageSettings}
                initial={pageSettings}
            />
        </Box>
    );
};

export default Posts;
