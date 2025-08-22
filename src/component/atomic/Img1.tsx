import clsx from "clsx";

export const Img= ({src , onClick, cls}) => {
    return <>
    <div>
      <img src={src} onClick={onClick} className={clsx("h-12 rounded-lx relative", cls && cls)}/> 
    </div>       
    </>
}