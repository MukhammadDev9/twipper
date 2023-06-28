import { AlbumResponseData } from "../../pages/albums/types";
import { UserDataI } from "../../utils/types";

export interface AlbumCardProps {
    item: AlbumResponseData
    userList: UserDataI[]
    request: () => void
    usersRequest: () => void
}