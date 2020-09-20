
// Если тип переданный в T является объектом у которого ключ равен строке, а значением является функция, тогда определи (додумай) возвращаемый тип U с помощью оператора infer (где U - возвращаемый action) и верни его, в противном же случае не возвращай ничего (never)

export type InferActionTypes<T> = T extends {[key: string]:(...args: any[])=>infer U}? U : never

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCounter: number
}

export type UserType = {
    id: string
    fullName: string
    avatar: string
    following: boolean
    status: string
    location: {
        country: string
        city: string
    }
}


