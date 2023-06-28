import { AlbumResponseData } from "../../pages/albums/types";
import { PhotoResponseData } from "../../pages/photos/types";
import { PostResponseData } from "../../pages/posts/types";

export interface PostsFormProps {
    item: PostResponseData & PhotoResponseData & AlbumResponseData;
    userData: {
        id: number
        name: string
    }
}

export interface PostsDetailsI {
    name: string
    body: string
    userId: number
}

export interface PostsDetailsErrorI {
    name: boolean
    body: boolean
}