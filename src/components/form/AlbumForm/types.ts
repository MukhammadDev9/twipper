import { FormDataI } from "../../../utils/types";

export interface AlbumsFormProps {
    item: FormDataI
    userData: {
        id: number
        name: string
    }
    onClose: () => void
}