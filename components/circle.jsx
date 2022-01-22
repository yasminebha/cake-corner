export default function Circle({ color, imgSrc, name }) {
    return <div className="flex flex-col gap-4">
        <div className={`circle ${color}`}>
            <img className='w-1/3' src={imgSrc}></img>
        </div>
        <h3 className='pacifico text-2xl first-letter:uppercase'>{name}</h3>
    </div>
}