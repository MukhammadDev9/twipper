import { FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { PostCard, PostCardSkeleton } from "../../components";
import AppPagination from "../../components/pagination";
import { useLoad } from "../../hooks/request";
import { postsGetUrl } from "../../utils/url";
import { GetResponseI, PageSettingsI, PostsProps, ResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
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
            url: postsGetUrl(pageSettings.page, pageSettings.limit),
        },
        [pageSettings]
    );

    useEffect(() => {
        if (
            localStorage.getItem("chapter") === null ||
            localStorage.getItem("chapter") !== "posts"
        ) {
            localStorage.setItem("chapter", "posts");
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
