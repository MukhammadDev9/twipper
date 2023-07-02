import { type FC } from "react";
import { Box, Paper, Typography, Skeleton } from "@mui/material";
import { useLoad } from "../../../hooks/request";
import { userById } from "../../../utils/url";
import { SaveButton } from "../../Atoms";
import { CommentAction, DeleteAction, EditAction } from "../../Organisms";
import { PostCardPropsI } from "./types";

const PostCard: FC<PostCardPropsI> = (props) => {
    const { response, request } = useLoad({
        url: userById(props.item?.userId),
    });

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
                {props.item?.body && (
                    <Typography
                        variant="body2"
                        component={"div"}
                        dangerouslySetInnerHTML={{ __html: props.item?.body }}
                    />
                )}
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
                        {response?.name && (
                            <CommentAction
                                postId={props.item?.id}
                                username={response?.name}
                            />
                        )}
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        {response?.id && response?.name && (
                            <EditAction
                                item={props.item}
                                forPage="post"
                                userData={{
                                    id: response.id,
                                    name: response.name,
                                }}
                                request={props.request}
                            />
                        )}
                        <DeleteAction
                            forPage="posts"
                            id={response?.id}
                            request={props.request}
                            usersRequest={request}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default PostCard;
