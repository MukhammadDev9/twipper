import { FC } from "react";
import { Box } from "@mui/material";
import { TasksPropsI } from "./types";

const Tasks: FC<TasksPropsI> = ({}) => {
    return (
        <Box
            width="100%"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            Tasks
        </Box>
    );
};

export default Tasks;
