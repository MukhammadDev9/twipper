export interface PostsProps { }

export interface PostResponseData {
    id: number
    title?: string
    body?: string
    userId?: number
}

export interface PageSettingsI {
    page: number
    limit: number
} 