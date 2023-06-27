import { ApiResponseI } from "../../hooks/request";

export interface PostsProps { }

export interface GetResponseI extends ApiResponseI { }

export interface PostResponseData {
    id: number
    title: string
    body: string
    userId: number
}

export interface PageSettingsI {
    page: number
    limit: number
} 