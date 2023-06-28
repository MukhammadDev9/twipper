export interface CommentCardProps {
    item: CommentItem
    username: string
}

export interface CommentItem {
    id: number
    name: string
    email: string
    body: string
    postId: number
}