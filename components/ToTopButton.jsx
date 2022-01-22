import React from "react"
import { FiChevronUp } from 'react-icons/fi'

export default function ToTopButton() {

    const [scrollY, setScrollY] = React.useState()

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    const handleScrollTo = () => window.scrollTo(0, 0)

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    if (scrollY > 200) {
        return <button onClick={handleScrollTo} className='fixed bottom-5 right-10 z-50 bg-white p-2 rounded-full text-3xl hover:bg-gray-100 '>
            <FiChevronUp />
        </button>
    }

    return null

} 