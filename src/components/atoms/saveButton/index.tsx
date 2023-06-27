import { useState, type FC, useContext, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Fab } from "@mui/material";
import { FavoriteContext, Item } from "../../../context";
import { PhotoResponseData } from "../../../pages/photos/types";
import { PostResponseData } from "../../../pages/posts/types";
import {
    getLocalItem,
    jsonParseString,
    jsonStringifyElement,
    setLocalItem,
} from "../../../utils/utils";

interface SaveButtonProps {
    item: Item;
}

const SaveButton: FC<SaveButtonProps> = ({ item }) => {
    const context = useContext(FavoriteContext);
    const [saved, setSaved] = useState(false);

    const handleAddToFavorites = () => {
        if (item?.albumId) {
            context?.addToFavorites(item);
        } else {
            context?.addToFavoritesPosts(item);
        }
        setSaved(true);
    };

    const handleRemoveFromFavorites = () => {
        if (item?.albumId) {
            context?.removeFromFavorites(item.id);
        } else {
            context?.removeFromFavoritesPosts(item.id);
        }
        setSaved(false);
    };

    useEffect(() => {
        if (item?.albumId) {
            setLocalItem(
                "photos",
                jsonStringifyElement(context?.photoFavorites)
            );
        } else {
            setLocalItem("posts", jsonStringifyElement(context?.postFavorites));
        }
    }, [handleAddToFavorites, handleRemoveFromFavorites]);

    useEffect(() => {
        if (item?.albumId) {
            context?.setPhotoFavorites(jsonParseString(getLocalItem("photos")));
            jsonParseString(getLocalItem("photos"))?.forEach(
                (element: PhotoResponseData) => {
                    element.id === item.id && setSaved(true);
                }
            );
        } else {
            context?.setPostFavorites(jsonParseString(getLocalItem("posts")));
            jsonParseString(getLocalItem("posts"))?.forEach(
                (element: PostResponseData) => {
                    element.id === item.id && setSaved(true);
                }
            );
        }
    }, []);

    return (
        <Fab
            color="secondary"
            aria-label="save"
            size="small"
            onClick={saved ? handleRemoveFromFavorites : handleAddToFavorites}
        >
            {saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Fab>
    );
};

export default SaveButton;
