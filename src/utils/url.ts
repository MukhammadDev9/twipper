// Posts
export const postsGetUrl = (page: number = 1, limit: number = 10) => `/posts${limit === 0 ? '' : `?_page=${page}&_limit=${limit}`}`
export const postsPostUrl: string = '/posts'
export const postsPutUrl = (id: number) => `/posts/${id}`
export const postsDeleteUrl = (id: number) => `/posts/${id}`

// Photos
export const photosGetUrl = (id: string | undefined, page: number = 1, limit: number = 10) => `/photos?albumId=${id}${limit === 0 ? '' : `&_page=${page}&_limit=${limit}`}`
export const photosPostUrl: string = '/photos'
export const photosPutUrl = (id: number) => `/photos/${id}`
export const photosDeleteUrl = (id: number) => `/photos/${id}`

// Users
export const usersGetUrl = '/users'

// Comments
export const commentsGetUrl = (id: number = 1) => `/comments?postId=${id}`

// Albums
export const albumsGetUrl = (page: number = 1, limit: number | string = 10) => `/albums${limit === 0 ? '' : `?_page=${page}&_limit=${limit}`}`
export const albumsPostUrl: string = '/albums'
export const albumsPutUrl = (id: number) => `/albums/${id}`
export const albumsDeleteUrl = (id: number) => `/albums/${id}`
