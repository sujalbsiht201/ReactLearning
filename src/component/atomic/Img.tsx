export const Img= ({src , onClick}) => {
    return <>
    <div className="">
      <img src={src} onClick={onClick} className="h-12 rounded-lg"/>   
      </div>       
    </>
}