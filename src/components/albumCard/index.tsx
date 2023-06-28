import { useEffect, type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { UserDataI } from "../../utils/types";
import { SaveButton } from "../atoms";
import { EditAction, DeleteAction } from "../organisms";
import { AlbumCardProps } from "./types";

const AlbumCard: FC<AlbumCardProps> = ({
    item,
    userList,
    request,
    usersRequest,
}) => {
    const [userData, setUserData] = useState<UserDataI>({});
    const navigate = useNavigate();

    useEffect(() => {
        userList?.forEach((user) => {
            item.userId === user.id && setUserData(user);
        });
    }, []);

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
                {userData?.name === undefined ? (
                    <Skeleton
                        variant="rounded"
                        width={200}
                        height={20}
                        sx={{ my: 1 }}
                    />
                ) : (
                    <Typography variant="h6" color={"#404040"} mb={1}>
                        {userData?.name}
                    </Typography>
                )}
                <Typography
                    variant="subtitle1"
                    sx={{ cursor: "pointer" }}
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
                        {userData.id && userData.name && (
                            <EditAction
                                item={item}
                                forPage="albums"
                                userData={{
                                    id: userData.id,
                                    name: userData.name,
                                }}
                            />
                        )}
                        <DeleteAction
                            forPage="albums"
                            id={item.id}
                            request={request}
                            usersRequest={usersRequest}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default AlbumCard;
