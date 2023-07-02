// Posts
export const postsGetUrl = (page: number = 1, limit: number = 10): string => `/posts${limit === 0 ? '' : `?_page=${page}&_limit=${limit}`}`
export const postsPostUrl = (id: number | undefined): string => `/posts/${id}`
export const postsPutUrl = (id: number | undefined): string => `/posts/${id}`
export const postsDeleteUrl = (id: number): string => `/posts/${id}`

// Photos
export const photosGetUrl = (id: string | undefined, page: number = 1, limit: number = 10): string => `/photos?albumId=${id}${limit === 0 ? '' : `&_page=${page}&_limit=${limit}`}`
export const photosPostUrl: string = '/photos'
export const photosPutUrl = (id: number): string => `/photos/${id}`
export const photosDeleteUrl = (id: number): string => `/photos/${id}`

// Users
export const usersGetUrl: string = '/users'
export const userById = (id: number | undefined): string => `/users/${id}`

// Comments
export const commentsGetUrl = (id: number = 1): string => `/comments?postId=${id}`

// Albums
export const albumsGetUrl = (page: number = 1, limit: number | string = 10): string => `/albums${limit === 0 ? '' : `?_page=${page}&_limit=${limit}`}`
export const albumsPostUrl = (id: number | undefined): string => `/albums/${id}`
export const albumsPutUrl = (id: number | undefined): string => `/albums/${id}`
export const albumsDeleteUrl = (id: number): string => `/albums/${id}`

// Todos
export const todosGetUrl = (page: number = 1, limit: number | string = 10): string => `/todos${limit === 0 ? '' : `?_page=${page}&_limit=${limit}`}`
