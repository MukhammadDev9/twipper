import { useState, type FC } from "react";
import { Box } from "@mui/material";
import { PhotoResponseData } from "../../../pages/photos/types";
import { PostResponseData } from "../../../pages/posts/types";
import { EditButton } from "../../atoms";
import AppEditDrawer from "../../editDrawer";

interface EditActionProps {
    item: PostResponseData & PhotoResponseData;
    forPage: string;
    userDataId: number;
}

const EditAction: FC<EditActionProps> = ({ item, forPage, userDataId }) => {
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
                userDataId={userDataId}
            />
        </Box>
    );
};

export default EditAction;
