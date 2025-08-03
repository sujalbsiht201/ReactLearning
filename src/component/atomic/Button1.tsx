export const Button1 =({onClick,name}) =>{
    return <>
    <button className="bg-blue-400 rounded-full px-2" onClick={onClick}>{name}</button>
    
    </>
}