import { FC, useState, useEffect } from "react";
import {
    Box,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { getLocalItem, setLocalItem } from "../../utils/utils";
import { AppPaginationPropsI } from "./types";

const AppPagination: FC<AppPaginationPropsI> = ({ handleChange, initial }) => {
    const [pageApi, setPageApi] = useState(1);
    const [limitApi, setLimitApi] = useState("10");

    const handleApiChange = (value: number) => {
        setPageApi(value);
        setLocalItem("page", value);
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        setLimitApi(e.target.value);
        setLocalItem("limit", e.target.value);
    };

    useEffect(() => {
        handleChange({ ...initial, page: pageApi, limit: limitApi });
    }, [pageApi, limitApi]);

    return (
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            my={3}
        >
            <Pagination
                page={
                    getLocalItem("page") === "null"
                        ? initial.page
                        : Number(getLocalItem("page"))
                }
                count={10}
                defaultPage={initial.page}
                onChange={(e, value) => handleApiChange(value)}
                color="primary"
            />
            <Select
                value={
                    getLocalItem("limit") === "null"
                        ? String(initial.limit)
                        : getLocalItem("limit")
                }
                defaultValue={initial.limit}
                onChange={handleSelectChange}
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
