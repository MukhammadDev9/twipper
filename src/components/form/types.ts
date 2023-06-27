import { PostResponseData } from "../../pages/posts/types";

export interface PostsFormProps {
    item: PostResponseData;
    userDataId: number
}

export interface PostsDetailsI {
    title: string
    body: string
    userId: number
}

export interface PostsDetailsErrorI {
    title: boolean
    body: boolean
}