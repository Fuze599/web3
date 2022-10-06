import { useState } from "react"

function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key)
    if (storedValue) initialValue = storedValue

    localStorage.setItem(key, initialValue)
    return useState(initialValue)
}

export default useLocalStorage