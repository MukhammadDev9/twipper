import { FC } from "react";
import { Box } from "@mui/material";
import { PostCard, PostCardSkeleton } from "../../components";
import { useLoad } from "../../hooks/request";
import { postsGetUrl } from "../../utils/url";
import { GetResponseI, PostsProps, ResponseData } from "./types";

const Posts: FC<PostsProps> = ({}) => {
    const { response, loading } = useLoad<GetResponseI>({
        url: postsGetUrl(1, 10),
    });

    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            {loading
                ? [0, 1, 2, 3, 4, 5, 6].map((item) => (
                      <PostCardSkeleton key={item} />
                  ))
                : response?.map((item: ResponseData) => (
                      <PostCard key={item.id} {...item} />
                  ))}
        </Box>
    );
};

export default Posts;
