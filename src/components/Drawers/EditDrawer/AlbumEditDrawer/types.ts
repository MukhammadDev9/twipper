import { FormDataI } from "../../../../utils/types";

export interface AlbumEditDrawerProps {
    open: boolean;
    toggleClose: () => void;
    item: FormDataI;
    userData: {
        id: number;
        name: string;
    };
}