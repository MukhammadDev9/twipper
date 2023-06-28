import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Button,
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
            if (window.location.pathname.includes(route.path))
                setSelectedItem(route.id);
        });
    }, []);

    return (
        <Box sx={{ height: "100%" }}>
            <Paper elevation={0}>
                <List
                    sx={{
                        display: "grid",
                        rowGap: ".5rem",
                        width: "90%",
                        px: 2,
                    }}
                >
                    {routes.map((route) => (
                        <Link
                            key={route.id}
                            to={route.path}
                            onClick={() => handleSelectItem(route.id)}
                        >
                            <Button
                                variant={
                                    selectedItem === route.id
                                        ? "contained"
                                        : "outlined"
                                }
                                fullWidth
                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {route.label}
                            </Button>
                        </Link>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default Sidebar;
