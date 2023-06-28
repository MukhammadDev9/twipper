import { PostResponseData } from "../../pages/posts/types";
import { UserDataI } from "../../utils/types";

export interface PostCardPropsI {
    item: PostResponseData
    request: () => void
}