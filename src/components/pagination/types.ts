export interface AppPaginationPropsI {
    page: string
    setPageSettings: React.Dispatch<React.SetStateAction<{
        page: number;
        limit: string;
    }>>
    pageSettings: {
        page: number
        limit: string
    }
}