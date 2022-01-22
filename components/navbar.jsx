import { useEffect, useState } from "react"

const linkClass = " p-2 rounded-md relative  overflow-hidden group text-sm"

const items = [
    {
        name: "Home",
        href: "#top"
    },
    {
        name: "Products",
        href: "#test"
    },

    {
        name: "Order",
        href: "#1"
    },
    {
        name: "About",
        href: "#2"
    },
    {
        name: "Contact",
        href: "#3"
    },
]

export const Navbar = () => {

    const [scrollY, setScrollY] = useState()

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (<nav id="nav" className={`gap-4 flex items-center py-4 px-20 z-50  fixed inset-x-0 transition-all duration-500 ${scrollY > 80 ? 'bg-[#fff] h-20' : 'h-24 '}`}>
        <span className="mr-auto text-4xl ml-10 pacifico">Cake Corner</span>
        {
            items.map((item) => {
                return <a key={item.href} href={item.href} className={linkClass}>
                    <span className=" absolute text-md bg bg-[rgb(173,204,188)] inset-0 group-hover:opacity-100 translate-x-full ml-20 group-hover:ml-0 group-hover:translate-x-0 transition-all duration-300"> </span>
                    <span className="relative">{item.name}</span>
                </a>
            })
        }
    </nav>)
}