import { FC } from "react";
import { Pagination } from "@mui/material";
import { AppPaginationPropsI } from "./types";

const AppPagination: FC<AppPaginationPropsI> = ({}) => {
    return <Pagination count={10} defaultPage={1} color="primary" />;
};

export default AppPagination;
