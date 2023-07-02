import type { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface AddButtonProps {
    forPage: string;
}

const AddButton: FC<AddButtonProps> = ({ forPage }) => {
    return (
        <Box>
            <Button variant="contained">
                <AddIcon /> Add {forPage}
            </Button>
        </Box>
    );
};

export default AddButton;
