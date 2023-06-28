import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { AlbumResponseData } from "../../../pages/albums/types";
import { PhotoResponseData } from "../../../pages/photos/types";
import { PostResponseData } from "../../../pages/posts/types";
import { EditButton } from "../../atoms";
import AppEditDrawer from "../../editDrawer";

interface EditActionProps {
    item: PostResponseData & PhotoResponseData & AlbumResponseData;
    forPage: string;
    userData: {
        id: number;
        name: string;
    };
}

const EditAction: FC<EditActionProps> = ({ item, forPage, userData }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleClose = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <Box onClick={toggleClose} display={"inline"}>
                <EditButton />
            </Box>
            <AppEditDrawer
                forPage={forPage}
                open={open}
                toggleClose={toggleClose}
                item={item}
                userData={userData}
            />
        </Box>
    );
};

export default EditAction;
