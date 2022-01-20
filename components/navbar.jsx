import { useEffect, useState } from "react"

const linkClass = "uppercase p-2 rounded-md relative  overflow-hidden group text-sm"

const items = [
    {
        name: "HOME",
        href: "#top"
    },
    {
        name: "PRODUCTS",
        href: "#test"
    },

    {
        name: "ORDER",
        href: "#1"
    },
    {
        name: "ABOUT US",
        href: "#2"
    },
    {
        name: "CONTACT",
        href: "#3"
    },
]

export const Navbar = () => {

    const [scrollY,setScrollY] = useState()

    useEffect(()=>{
        window.onscroll = function(){
            setScrollY(window.scrollY)
        }
    },[])


    return (<nav id="nav" className={`gap-4 flex items-center py-4 px-20  fixed inset-x-0 transition-all duration-500 ${scrollY>80 ? 'bg-white h-20':'h-24 '}`}>
        <span className="mr-auto text-4xl ml-10 pacifico">cake corner</span>
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