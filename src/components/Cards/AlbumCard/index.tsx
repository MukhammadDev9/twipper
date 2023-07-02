import { type FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { SaveButton } from "../../Atoms";
import { EditAction, DeleteAction } from "../../Organisms";
import { AlbumCardProps, UserData } from "./types";

const AlbumCard: FC<AlbumCardProps> = ({ item, request, userList }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData>({
        id: 0,
        name: "",
    });

    useEffect(() => {
        userList?.forEach((user) => {
            if (user.id === item?.userId) {
                setUserData({ ...userData, id: user.id, name: user.name });
            }
        });
    }, [item]);

    const handleClick = () => {
        navigate("/albums/" + item.id);
    };

    return (
        <Box sx={{ my: 2, maxWidth: 600, width: "100%" }}>
            <Paper
                elevation={3}
                sx={{
                    py: 1,
                    px: 3,
                }}
            >
                <Typography variant="h6" color={"#404040"} mb={1}>
                    {userData.name ? (
                        userData.name
                    ) : (
                        <Skeleton
                            variant="rounded"
                            width={200}
                            height={20}
                            sx={{ my: 1 }}
                        />
                    )}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={handleClick}
                    color="secondary"
                    display={"inline"}
                >
                    {item.title}
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    columnGap={2}
                    mt={2}
                    mb={1}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        <SaveButton item={item} />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        <EditAction
                            item={item}
                            forPage="album"
                            userData={{
                                id: userData.id,
                                name: userData.name,
                            }}
                            request={request}
                        />
                        <DeleteAction
                            forPage="albums"
                            id={item.id}
                            request={request}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default AlbumCard;
