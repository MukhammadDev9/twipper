import { FormDataI } from "../../../../utils/types";

export interface PostDrawerProps {
    open: boolean;
    toggleClose: () => void;
    item: FormDataI | null;
    userData: {
        id: number;
        name: string;
    };
    request: (AxiosOptions?: any) => void;
}
