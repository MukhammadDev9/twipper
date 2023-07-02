import { FormDataI } from "../../../utils/types";

export interface AlbumsFormProps {
    item: FormDataI
    userData: {
        id: number
        name: string
    }
    onClose: () => void
    request: (AxiosOptions?: any) => void
}

export interface AlbumFormValues {
    title: string
    userId: number
}