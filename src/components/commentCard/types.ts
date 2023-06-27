export interface CommentCardProps {
    item: CommentItem
}

export interface CommentItem {
    id: number
    name: string
    email: string
    body: string
    postId: number
}