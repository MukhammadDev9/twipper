import { ApiResponseI } from "../../hooks/request";

export interface PostsProps { }

export interface GetResponseI extends ApiResponseI { }

export interface ResponseData {
    id: number
    title: string
    body: string
    userId: number
}