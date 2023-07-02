import { type FC, useState, useEffect } from "react";
import { Box, Paper, Typography, Skeleton } from "@mui/material";
import { SaveButton } from "../../Atoms";
import { CommentAction, DeleteAction, EditAction } from "../../Organisms";
import { PostCardPropsI, UserData } from "./types";

const PostCard: FC<PostCardPropsI> = ({ item, userList, request }) => {
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
                    {userData?.name ? (
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
                {item?.body && (
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
                        <CommentAction
                            postId={item?.id}
                            username={userData.name}
                        />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        columnGap={2}
                    >
                        <EditAction
                            item={item}
                            forPage="post"
                            userData={{
                                id: userData.id,
                                name: userData.name,
                            }}
                            request={request}
                        />

                        <DeleteAction
                            forPage="posts"
                            id={userData.id}
                            request={request}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default PostCard;
