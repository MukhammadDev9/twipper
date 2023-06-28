export interface PhotosPropsI { }

export interface GetResponseI { }

export interface PhotoResponseData {
    albumId?: number
    id: number
    title?: string
    url?: string
    thumbnailUrl?: string
}

export interface PageSettingsI {
    page: number
    limit: number
}