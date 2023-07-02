import { useState, type FC } from "react";
import Box from "@mui/material/Box";
import { AddButton } from "../../Atoms";
import { PostEditDrawer } from "../../Drawers/EditDrawer";
import AlbumEditDrawer from "../../Drawers/EditDrawer/AlbumEditDrawer";

interface AddActionProps {
    item: null;
    forPage: string;
    userData: {
        id: number;
        name: string;
    };
    request: (AxiosOptions?: any) => void;
}

const AddAction: FC<AddActionProps> = ({
    item,
    forPage,
    userData,
    request,
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleClose = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <Box onClick={toggleClose} display={"inline"}>
                <AddButton forPage={forPage} />
            </Box>
            {forPage === "post" && (
                <PostEditDrawer
                    open={open}
                    toggleClose={toggleClose}
                    item={item}
                    userData={userData}
                    request={request}
                />
            )}
            {forPage === "album" && (
                <AlbumEditDrawer
                    open={open}
                    toggleClose={toggleClose}
                    item={item}
                    userData={userData}
                    request={request}
                />
            )}
        </Box>
    );
};

export default AddAction;
