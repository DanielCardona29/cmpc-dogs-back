interface errorsManager {
    error: any
}

export const errorsManager = (message: string, error: any) => {
    return { message, error }
}