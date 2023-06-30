export interface UserDataI {
    id?: number
    name?: string
    phone?: string
    username?: string
    website?: string
    email?: string
    address?: unknown
    company?: unknown
}

export interface FormDataI {
    id: number
    title?: string
    body?: string
    userId?: number
    albumId?: number
    url?: string
    thumbnailUrl?: string
}