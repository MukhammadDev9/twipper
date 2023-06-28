import { FC, useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { UserDataI } from "../../utils/types";
import { SaveButton } from "../atoms";
import CommentAction from "../organisms/commentAction";
import DeleteAction from "../organisms/deleteAction";
import EditAction from "../organisms/editAction";
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
                <Typography variant="h6">{userData.name}</Typography>
                {item.body && (
                    <Typography variant="subtitle1">
                        <div dangerouslySetInnerHTML={{ __html: item.body }} />
                    </Typography>
                )}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        columnGap: 2,
                        my: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            columnGap: 2,
                        }}
                    >
                        <SaveButton item={item} />
                        <CommentAction postId={item.id} />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            columnGap: 2,
                        }}
                    >
                        {userData.id && (
                            <EditAction
                                item={item}
                                forPage="posts"
                                userDataId={userData.id}
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
