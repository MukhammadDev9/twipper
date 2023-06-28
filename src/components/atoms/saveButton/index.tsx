import { useState, type FC, useContext, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Fab } from "@mui/material";
import { FavoriteContext, Item } from "../../../context";
import { AlbumResponseData } from "../../../pages/albums/types";
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
        } else if (item?.body) {
            context?.addToFavoritesPosts(item);
        } else {
            context?.addToFavoritesAlbums(item);
        }
        setSaved(true);
    };

    const handleRemoveFromFavorites = () => {
        if (item?.albumId) {
            context?.removeFromFavorites(item.id);
        } else if (item?.body) {
            context?.removeFromFavoritesPosts(item.id);
        } else {
            context?.addToFavoritesAlbums(item);
        }
        setSaved(false);
    };

    useEffect(() => {
        if (item?.albumId) {
            setLocalItem(
                "photos",
                jsonStringifyElement(context?.photoFavorites)
            );
        } else if (item?.body) {
            setLocalItem("posts", jsonStringifyElement(context?.postFavorites));
        } else {
            setLocalItem(
                "albums",
                jsonStringifyElement(context?.albumFavorites)
            );
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
        } else if (item?.body) {
            context?.setPostFavorites(jsonParseString(getLocalItem("posts")));
            jsonParseString(getLocalItem("posts"))?.forEach(
                (element: PostResponseData) => {
                    element.id === item.id && setSaved(true);
                }
            );
        } else {
            context?.setAlbumFavorites(jsonParseString(getLocalItem("albums")));
            jsonParseString(getLocalItem("albums"))?.forEach(
                (element: AlbumResponseData) => {
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
            variant="extended"
            onClick={saved ? handleRemoveFromFavorites : handleAddToFavorites}
        >
            {saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Fab>
    );
};

export default SaveButton;
