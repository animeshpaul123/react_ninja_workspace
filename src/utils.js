export const tryParse = data => {
    if (data === null || data === undefined) return false
    // throw new Error("not a valid json!")
    try {
        JSON.parse(data)
        return true
    } catch (error) {
        if (typeof data !== "object" && data) {
            return true
        }
        return false
    }
} 
