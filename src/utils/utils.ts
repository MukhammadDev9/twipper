export const adaptiveSize = (startSize: number, minSize: number): number => {
    const addSize = startSize - minSize

    return minSize + addSize * ((window.innerWidth - 420) / (1440 - 420))
}