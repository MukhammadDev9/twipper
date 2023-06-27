import { useState, type FC, useContext, useEffect } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Fab } from "@mui/material";
import { FavoriteContext, Item } from "../../../context";
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
        context?.addToFavorites(item);
        setSaved(true);
    };

    const handleRemoveFromFavorites = () => {
        context?.removeFromFavorites(item.id);
        setSaved(false);
    };

    useEffect(() => {
        setLocalItem("photos", jsonStringifyElement(context?.photoFavorites));
    }, [handleAddToFavorites, handleRemoveFromFavorites]);

    useEffect(() => {
        context?.setPhotoFavorites(jsonParseString(getLocalItem("photos")));
        jsonParseString(getLocalItem("photos")).forEach((element: any) => {
            element.id === item.id && setSaved(true);
        });
    }, []);

    return (
        <Fab
            color="secondary"
            aria-label="save"
            size="small"
            onClick={saved ? handleRemoveFromFavorites : handleAddToFavorites}
        >
            {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </Fab>
    );
};

export default SaveButton;
