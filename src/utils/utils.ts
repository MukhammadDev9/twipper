export const adaptiveSize = (startSize: number, minSize: number): number => {
    const addSize = startSize - minSize

    return minSize + addSize * ((window.innerWidth - 420) / (1440 - 420))
}

export const generateFakeArray = (length: number) => {
    const fakeArray = [];
    for (let i = 0; i < length; i++) {
        fakeArray.push(Math.floor(Math.random() * 1000));
    }
    return fakeArray;
}

export const clearLocalStorage = () => localStorage.clear()