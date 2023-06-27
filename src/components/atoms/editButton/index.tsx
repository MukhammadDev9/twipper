import type { FC } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";

interface EditButtonProps {}

const EditButton: FC<EditButtonProps> = ({}) => {
    return (
        <Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
        </Fab>
    );
};

export default EditButton;