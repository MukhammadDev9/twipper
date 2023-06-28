interface route {
    id: number
    path: string
    label: string
}

export const routes: route[] = [
    {
        id: 1,
        path: '/',
        label: 'Posts',
    },
    {
        id: 2,
        path: '/albums',
        label: 'Albums',
    },
    {
        id: 3,
        path: '/tasks',
        label: 'Tasks',
    },
]