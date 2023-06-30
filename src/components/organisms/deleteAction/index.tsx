import { useState, type FC } from "react";
import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { message } from "antd";
import { useDeleteRequest } from "../../../hooks/request";
import {
    albumsDeleteUrl,
    photosDeleteUrl,
    postsDeleteUrl,
} from "../../../utils/url";
import { DeleteButton } from "../../Atoms";

interface DeleteActionProps {
    forPage?: string;
    id: number;
    request: () => void;
    usersRequest?: () => void;
}

const DeleteAction: FC<DeleteActionProps> = ({
    forPage = "post",
    id,
    request,
    usersRequest,
}) => {
    const postDeleteRequest = useDeleteRequest({
        url: postsDeleteUrl(id),
    });
    const photoDeleteRequest = useDeleteRequest({
        url: photosDeleteUrl(id),
    });
    const albumDeleteRequest = useDeleteRequest({
        url: albumsDeleteUrl(id),
    });
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgree = async () => {
        try {
            if (forPage === "posts") {
                await postDeleteRequest.request();
                await request();
                usersRequest !== undefined && (await usersRequest());
                message.success("Успешно удалено");
            } else if (forPage === "photos") {
                await photoDeleteRequest.request();
                await request();
                message.success("Успешно удалено");
            } else if (forPage === "albums") {
                await albumDeleteRequest.request();
                await request();
                message.success("Успешно удалено");
            }
        } catch (error) {
            throw error;
        } finally {
            setOpen(false);
        }
    };

    return (
        <Box>
            <Box display={"inline"} onClick={handleOpen}>
                <DeleteButton />
            </Box>
            <Dialog open={open} keepMounted onClose={handleClose}>
                <DialogTitle>
                    {forPage === "posts" ? "Удаление поста" : "Удаление фото"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        При согласии {forPage === "post" ? "пост" : "фото"}{" "}
                        безвозвратно удалится. Вы согласны?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#ff0000",
                            ":hover": { bgcolor: "#b00000" },
                        }}
                        onClick={handleAgree}
                    >
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DeleteAction;
