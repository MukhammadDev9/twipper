import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { FormDataI } from "../../../utils/types";
import { EditButton } from "../../atoms";
import { PostEditDrawer } from "../../editDrawer";
import AlbumEditDrawer from "../../editDrawer/AlbumEditDrawer";

interface EditActionProps {
    item: FormDataI;
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
            {forPage === "post" && (
                <PostEditDrawer
                    open={open}
                    toggleClose={toggleClose}
                    item={item}
                    userData={userData}
                />
            )}
            {forPage === "album" && (
                <AlbumEditDrawer
                    open={open}
                    toggleClose={toggleClose}
                    item={item}
                    userData={userData}
                />
            )}
        </Box>
    );
};

export default EditAction;
