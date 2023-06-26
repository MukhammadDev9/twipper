// Posts
export const postsGetUrl = (page: number = 1, limit: number = 10) => `/posts?_page=${page}&_limit=${limit}`
export const postsPostUrl: string = '/posts'
export const postsPutUrl = (id: number) => `/posts/${id}`
export const postsDeleteUrl = (id: number) => `/posts/${id}`

// Photos
export const photosGetUrl = (page: number = 1, limit: number = 10) => `/photos?_page=${page}&_limit=${limit}`
export const photosPostUrl: string = '/photos'
export const photosPutUrl = (id: number) => `/photos/${id}`
export const photosDeleteUrl = (id: number) => `/photos/${id}`