import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { routes } from "../../data/routes";
import { SidebarPropsI } from "./types";

const Sidebar: FC<SidebarPropsI> = ({}) => {
    const [selectedItem, setSelectedItem] = useState<number>(1);

    const handleSelectItem = (id: number) => {
        routes.forEach((route) => {
            route.id !== selectedItem && setSelectedItem(id);
        });
    };

    useEffect(() => {
        routes.forEach((route) => {
            route.path === window.location.pathname &&
                setSelectedItem(route.id);
        });
    }, []);

    return (
        <Box sx={{ height: "100%" }}>
            <List sx={{ display: "grid", rowGap: ".5rem", width: "100%" }}>
                {routes.map((route) => (
                    <ListItem
                        disablePadding
                        key={route.id}
                        sx={{ width: "100%" }}
                        onClick={() => handleSelectItem(route.id)}
                    >
                        <Link
                            to={route.path}
                            style={{ textDecoration: "none", width: "100%" }}
                        >
                            <ListItemButton
                                selected={selectedItem === route.id}
                                sx={{
                                    borderRight:
                                        selectedItem === route.id
                                            ? "3.5px solid #0059ff    "
                                            : "",
                                    width: "100%",
                                }}
                            >
                                <ListItemText>{route.label}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
