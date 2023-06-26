import { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { GetResponseI, PostsProps, ResponseData } from "./types";
import { useLoad } from "../../hooks/request";
import { PostCard } from "../../components";
import PostCardSkeleton from "../../components/postCardSkeleton";

const Posts: FC<PostsProps> = ({}) => {
    const { response, loading } = useLoad<GetResponseI>({ url: "/posts" });

    return (
        <Box>
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
