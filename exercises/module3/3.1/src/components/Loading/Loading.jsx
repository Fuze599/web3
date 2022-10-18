import { useState } from "react"

const Loading = () => {
    const [loading, setLoading] = useState(false)

    setTimeout(() => setLoading(!loading), 3000)

    if (loading) {
        return <p>Loading : TRUE</p>
    }
    return <p>Loading : FALSE</p>
}

export default Loading