import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { useLoad } from "../../../hooks/request";
import { userById } from "../../../utils/url";
import { SaveButton } from "../../Atoms";
import { EditAction, DeleteAction } from "../../Organisms";
import { AlbumCardProps } from "./types";

const AlbumCard: FC<AlbumCardProps> = (props) => {
    const navigate = useNavigate();
    const { response, request } = useLoad({
        url: userById(props.item?.userId),
    });

    const handleClick = () => {
        navigate("/albums/" + props.item?.id);
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
                    {response?.name ? (
                        response.name
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
                    {props.item?.title}
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
                        <SaveButton item={props.item} />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        {response?.id && response?.name && (
                            <EditAction
                                item={props.item}
                                forPage="album"
                                userData={{
                                    id: response.id,
                                    name: response.name,
                                }}
                                request={props.request}
                            />
                        )}
                        <DeleteAction
                            forPage="albums"
                            id={props.item?.id}
                            request={props.request}
                            usersRequest={request}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default AlbumCard;
