import type { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import { Item } from "../../../context";

interface DeleteButtonProps {}

const DeleteButton: FC<DeleteButtonProps> = ({}) => {
    return (
        <Fab
            sx={{
                bgcolor: "#ff0000",
                color: "#ffffff",
                transition: "all .1s ease-in-out",
                ":hover": { bgcolor: "#af0000" },
            }}
            aria-label="delete"
            size="small"
        >
            <DeleteIcon />
        </Fab>
    );
};

export default DeleteButton;
