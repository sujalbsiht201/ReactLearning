import { useState } from "react"

export const Counter=()=>{
    let [count, setCount]= useState(0)
    
    const handleDec=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const handleInc=()=>{
        setCount(count+1)

    }

    return(
       <>
                <div className="flex flex-col items-center bg-blue-500">
                    <div className="flex items-center justify-between bg-red-500 w-30">
                        <div className="flex flex-col bg-purple-500  px-4 py-2" onClick={handleDec}>-</div>
                            <div>{count}</div>
                                <div className="flex flex-col bg-purple-500 px-4 py-2" onClick={handleInc}>+</div>
                    </div>
                 </div>
        </>
    )
}