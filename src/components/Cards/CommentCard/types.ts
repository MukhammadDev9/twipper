export interface CommentCardProps {
    item: CommentItemI
    username: string
}

export interface CommentItemI {
    id: number
    name: string
    email: string
    body: string
    postId: number
}