import { FormDataI } from "../../../utils/types";

export interface PostsFormProps {
    item: FormDataI
    userData: {
        id: number
        name: string
    }
    onClose: () => void
    request: (AxiosOptions?: any) => void;
}

export interface PostFormValuesI {
    title: string;
    body: string;
    userId: string;
}