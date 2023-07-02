export interface AppPaginationPropsI {
    page: string
    setPageSettings: React.Dispatch<React.SetStateAction<PageSettingsI>>
    pageSettings: PageSettingsI
}

export interface PageSettingsI {
    page: number
    limit: string
}