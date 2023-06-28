import { FC, useEffect, useState } from "react";
import { Box, Paper, Typography, Skeleton } from "@mui/material";
import { UserDataI } from "../../utils/types";
import { SaveButton } from "../atoms";
import { CommentAction, DeleteAction, EditAction } from "../organisms";
import { PostCardPropsI } from "./types";

const PostCard: FC<PostCardPropsI> = ({
    item,
    userList,
    request,
    usersRequest,
}) => {
    const [userData, setUserData] = useState<UserDataI>({});
    useEffect(() => {
        userList?.forEach((user) => {
            item.userId === user.id && setUserData(user);
        });
    }, []);

    return (
        <Box sx={{ my: 2, maxWidth: 600, width: "100%" }}>
            <Paper
                elevation={3}
                sx={{
                    py: 1,
                    px: 3,
                }}
            >
                {userData.name === undefined ? (
                    <Skeleton
                        variant="rounded"
                        width={200}
                        height={20}
                        sx={{ my: 1 }}
                    />
                ) : (
                    <Typography variant="h6" color={"#404040"} mb={1}>
                        {userData.name}
                    </Typography>
                )}
                {item.body && (
                    <Typography
                        variant="body2"
                        component={"div"}
                        dangerouslySetInnerHTML={{ __html: item.body }}
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
                        <SaveButton item={item} />
                        {userData.name && (
                            <CommentAction
                                postId={item.id}
                                username={userData.name}
                            />
                        )}
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        {userData.id && userData.name && (
                            <EditAction
                                item={item}
                                forPage="posts"
                                userData={{
                                    id: userData.id,
                                    name: userData.name,
                                }}
                            />
                        )}
                        <DeleteAction
                            forPage="posts"
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

export default PostCard;
