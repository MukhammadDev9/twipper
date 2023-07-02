import { PostResponseData } from "../../../pages/posts/types";
import { UserDataI } from "../../../utils/types";

export interface PostCardPropsI {
    item: PostResponseData
    request: (AxiosOptions?: any) => void
    userList: UserDataI[]
}

export interface UserData {
    id: number
    name: string
}