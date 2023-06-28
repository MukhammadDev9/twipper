import React, { useState } from "react";
import { getLocalItem, jsonParseString } from "../utils/utils";

export type Item = {
    id: number;
    title?: string;
    body?: string;
    userId?: number;
    albumId?: number;
    url?: string;
    thumbnailUrl?: string;
};

type FavoriteContextType = {
    photoFavorites: Item[];
    setPhotoFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    addToFavorites: (item: Item) => void;
    removeFromFavorites: (itemId: number) => void;
    postFavorites: Item[];
    setPostFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    addToFavoritesPosts: (item: Item) => void;
    removeFromFavoritesPosts: (itemId: number) => void;
    albumFavorites: Item[];
    setAlbumFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    addToFavoritesAlbums: (item: Item) => void;
    removeFromFavoritesAlbums: (itemId: number) => void;
};

export const FavoriteContext = React.createContext<
    FavoriteContextType | undefined
>(undefined);

const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [photoFavorites, setPhotoFavorites] = useState<Item[]>(
        getLocalItem("photos") === "null"
            ? []
            : jsonParseString(getLocalItem("photos"))
    );
    const [postFavorites, setPostFavorites] = useState<Item[]>(
        getLocalItem("posts") === "null"
            ? []
            : jsonParseString(getLocalItem("posts"))
    );
    const [albumFavorites, setAlbumFavorites] = useState<Item[]>(
        getLocalItem("albums") === "null"
            ? []
            : jsonParseString(getLocalItem("albums"))
    );

    const addToFavorites = (item: Item) => {
        setPhotoFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromFavorites = (itemId: number) => {
        setPhotoFavorites((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== itemId)
        );
    };

    const addToFavoritesPosts = (item: Item) => {
        setPostFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromFavoritesPosts = (itemId: number) => {
        setPostFavorites((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== itemId)
        );
    };

    const addToFavoritesAlbums = (item: Item) => {
        setAlbumFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromFavoritesAlbums = (itemId: number) => {
        setAlbumFavorites((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== itemId)
        );
    };

    return (
        <FavoriteContext.Provider
            value={{
                photoFavorites,
                setPhotoFavorites,
                addToFavorites,
                removeFromFavorites,
                postFavorites,
                setPostFavorites,
                addToFavoritesPosts,
                removeFromFavoritesPosts,
                albumFavorites,
                setAlbumFavorites,
                addToFavoritesAlbums,
                removeFromFavoritesAlbums,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
