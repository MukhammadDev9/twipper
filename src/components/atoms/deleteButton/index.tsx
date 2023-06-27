import type { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import { Item } from "../../../context";

interface DeleteButtonProps {
    item: Item;
}

const DeleteButton: FC<DeleteButtonProps> = ({ item }) => {
    return (
        <Fab color="secondary" aria-label="delete" size="small">
            <DeleteIcon />
        </Fab>
    );
};

export default DeleteButton;
