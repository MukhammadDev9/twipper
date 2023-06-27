import { FC, useState, useEffect } from "react";
import {
    Box,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { AppPaginationPropsI } from "./types";

const AppPagination: FC<AppPaginationPropsI> = ({ handleChange, initial }) => {
    const [pageApi, setPageApi] = useState(1);
    const [limitApi, setLimitApi] = useState("10");

    const handleApiChange = (value: number) => {
        setPageApi(value);
        localStorage.setItem("page", String(value));
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        setLimitApi(e.target.value);
        localStorage.setItem("limit", e.target.value);
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
                    localStorage.getItem("page") === null
                        ? initial.page
                        : Number(localStorage.getItem("page"))
                }
                count={10}
                defaultPage={initial.page}
                onChange={(e, value) => handleApiChange(value)}
                color="primary"
            />
            <Select
                value={
                    localStorage.getItem("limit") === null
                        ? String(initial.limit)
                        : String(localStorage.getItem("limit"))
                }
                defaultValue={initial.limit}
                onChange={handleSelectChange}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={0}>все</MenuItem>
            </Select>
        </Box>
    );
};

export default AppPagination;
