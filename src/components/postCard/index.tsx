import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { UserDataI } from "../../utils/types";
import { DeleteButton, SaveButton } from "../atoms";
import CommentAction from "../organisms/commentAction";
import EditAction from "../organisms/editAction";
import { PostCardPropsI } from "./types";

const PostCard: FC<PostCardPropsI> = ({ item, userList }) => {
    const [userData, setUserData] = useState<UserDataI>({});
    useEffect(() => {
        userList?.forEach((user) => {
            item.userId === user.id && setUserData(user);
        });
    }, []);

    return (
        <Box
            sx={{ my: 2, maxWidth: 600, width: "100%" }}
            border={"2px solid blue"}
            py={1}
            px={3}
        >
            <Typography>User id: {userData.id}</Typography>
            <Typography>Post user id: {item.userId}</Typography>
            <Typography>Post id: {item.id}</Typography>
            <Typography>{item.title}</Typography>
            {item.body && (
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
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
                    <DeleteButton item={item} />
                </Box>
            </Box>
        </Box>
    );
};

export default PostCard;
