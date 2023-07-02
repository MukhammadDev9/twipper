import { AlbumResponseData } from "../../../pages/albums/types";
import { UserDataI } from "../../../utils/types";

export interface AlbumCardProps {
    item: AlbumResponseData
    request: (AxiosOptions?: any) => void
    userList: UserDataI[]
}

export interface UserData {
    id: number
    name: string
}