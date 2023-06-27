import React, { useState } from "react";
import { getLocalItem, jsonParseString } from "../utils/utils";

export type Item = any;

type FavoriteContextType = {
    photoFavorites: Item[];
    setPhotoFavorites: React.Dispatch<React.SetStateAction<any[]>>;
    addToFavorites: (item: Item) => void;
    removeFromFavorites: (itemId: number) => void;
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

    const addToFavorites = (item: Item) => {
        setPhotoFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromFavorites = (itemId: number) => {
        setPhotoFavorites((prevFavorites) =>
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
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
