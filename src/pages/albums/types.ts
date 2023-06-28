export interface AlbumsProps { }

export interface AlbumResponseData {
    id: number
    title?: string
    userId?: number
}

export interface PageSettingsI {
    page: number
    limit: number
}