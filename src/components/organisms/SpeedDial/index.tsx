import type { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { Item } from "../../../context";
import { DeleteButton, EditButton, SaveButton } from "../../atoms";

interface SpeedDialProps {
    item: Item;
}

const AppSpeedDial: FC<SpeedDialProps> = ({ item }) => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial Actions"
            icon={<MoreVertIcon />}
            direction="left"
        >
            <SpeedDialAction icon={<DeleteButton />} tooltipTitle="Delete" />
            <SpeedDialAction icon={<EditButton />} tooltipTitle="Edit" />
            <SpeedDialAction
                icon={<SaveButton item={item} />}
                tooltipTitle="Save"
            />
        </SpeedDial>
    );
};

export default AppSpeedDial;
