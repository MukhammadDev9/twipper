import { FormDataI } from "../../../utils/types";

export interface PostsFormProps {
    item: FormDataI
    userData: {
        id: number
        name: string
    }
    onClose: () => void
}