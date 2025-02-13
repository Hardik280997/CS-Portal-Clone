export const capitalize = (str: string) => {
    if (typeof str === 'string') {
        if (str.includes('_')) {
            return str
                .split('_')
                .map((newStr, index, arr) =>
                    index + 1 === arr.length
                        ? ` ${newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase()}`
                        : `${newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase()}`
                ).join(' ')
        }
        return str.charAt(0).toUpperCase() + str.slice(1).split('_').join(' ').toLowerCase()
    }
    return str
}