import { FormDataI } from "../../../utils/types";

export interface PostDrawerProps {
    open: boolean;
    toggleClose: () => void;
    item: FormDataI;
    userData: {
        id: number;
        name: string;
    };
}
