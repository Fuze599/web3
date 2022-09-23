import { useState } from 'react'

function useLocalStorage(key, initialValue) {
    const existItem = localStorage.getItem(key)
    if (existItem) initialValue = parseInt(existItem)
    else localStorage.setItem(key, initialValue)

    return useState(initialValue)
}

export default useLocalStorage