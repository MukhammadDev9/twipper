import { AlbumResponseData } from "../../pages/albums/types";
import { PhotoResponseData } from "../../pages/photos/types";
import { PostResponseData } from "../../pages/posts/types";

export interface PostsFormProps {
    item: PostResponseData & PhotoResponseData & AlbumResponseData | null;
    userData: {
        id: number
        name: string
    }
}