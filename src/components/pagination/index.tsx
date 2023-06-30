import { FC, useEffect } from "react";
import {
    Box,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { getLocalItem, removeLocalItem, setLocalItem } from "../../utils/utils";
import { AppPaginationPropsI } from "./types";

const AppPagination: FC<AppPaginationPropsI> = ({
    page,
    pageSettings,
    setPageSettings,
}) => {
    const handleCurrentPage = (value: number) => {
        setPageSettings({ ...pageSettings, page: value });
        setLocalItem("page", value);
    };

    const handleCurrentLimit = (e: SelectChangeEvent) => {
        setPageSettings({ ...pageSettings, limit: e.target.value });
        setLocalItem("limit", e.target.value);
    };

    useEffect(() => {
        if (
            getLocalItem("chapter") === "null" ||
            getLocalItem("chapter") !== page
        ) {
            setLocalItem("chapter", page);
            removeLocalItem("page");
            removeLocalItem("limit");
        }

        if (getLocalItem("page") === "null") {
            setLocalItem("page", 1);
        }
        if (getLocalItem("limit") === "null") {
            setLocalItem("limit", 10);
        }
    }, [pageSettings.page, pageSettings.limit]);

    return (
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            my={3}
        >
            <Pagination
                page={Number(getLocalItem("page"))}
                count={10}
                defaultPage={1}
                onChange={(_, value) => handleCurrentPage(value)}
                color="primary"
            />
            <Select
                size="small"
                value={getLocalItem("limit")}
                defaultValue={"10"}
                onChange={handleCurrentLimit}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={0}>Все</MenuItem>
            </Select>
        </Box>
    );
};

export default AppPagination;
