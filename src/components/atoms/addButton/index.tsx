import type { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

interface AddButtonProps {}

const AddButton: FC<AddButtonProps> = () => {
    return (
        <Fab color="secondary" aria-label="add" size="small">
            <AddIcon />
        </Fab>
    );
};

export default AddButton;
