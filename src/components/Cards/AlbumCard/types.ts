import { AlbumResponseData } from "../../../pages/albums/types";

export interface AlbumCardProps {
    item: AlbumResponseData
    request: () => void
}