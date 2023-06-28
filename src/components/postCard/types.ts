import { PostResponseData } from "../../pages/posts/types";
import { UserDataI } from "../../utils/types";

export interface PostCardPropsI {
    item: PostResponseData
    userList: UserDataI[]
    request: () => void
    usersRequest: () => void
}