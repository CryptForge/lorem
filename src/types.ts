export type User = {
    username: string,
    email: string,
    picture: string
}

export type Task = {
    name: string,
    category: string,
    description: string,
    deadline?: Date,
    completed: boolean
}

export type Website = {
    name: string,
    url: string,
    description: string,
    clicks: number
}