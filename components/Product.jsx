export default function Product({src,name,price}){
    return <div className="flex flex-col max-w-[280px] gap-2 mx-auto relative group rounded-xl overflow-hidden">
        <img className="" src={src} />
        <div className=" absolute inset-0 flex flex-col justify-center bg-[#00000079] text-[#fff] opacity-0 group-hover:opacity-100 transition duration-300 ">
            <h1 className="montserrat text-2xl capitalize text-center translate-y-20 group-hover:translate-y-0 transition duration-300  ">{name}</h1>
            <h2 className="text-center translate-y-20 group-hover:translate-y-0 transition text-2xl duration-300 ">{price} DT</h2>
        </div>
    </div>
}