export const adaptiveSize = (startSize: number, minSize: number): number => {
    const addSize = startSize - minSize

    return minSize + addSize * ((window.innerWidth - 420) / (1440 - 420))
}

export const getLocalItem = (name: string): string => {
    return String(localStorage.getItem(name))
}

export const setLocalItem = (name: string, item: any) => {
    return localStorage.setItem(name, item)
}

export const removeLocalItem = (name: string) => {
    return localStorage.removeItem(name)
}

export const jsonParseString = (item: string) => {
    return JSON.parse(item)
}

export const jsonStringifyElement = (element: any) => {
    return JSON.stringify(element)
}