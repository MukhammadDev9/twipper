import type { FC } from "react";
import { Button } from "@mui/material";

interface SubmitButtonProps {}

const SubmitButton: FC<SubmitButtonProps> = ({}) => {
    return (
        <Button variant="contained" color="success" type="submit">
            Submit
        </Button>
    );
};

export default SubmitButton;
