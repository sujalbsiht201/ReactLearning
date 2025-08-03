import { useReducer } from "react";
import { Button1 } from "../atomic/Button1"

const frameImage=[{
id:0,
src:"https://www.shutterstock.com/image-photo/fantasy-cartoon-artistic-image-tom-260nw-2600504163.jpg",
discription:"Tom and jarry"
},
{
id:2,
src:"https://www.shutterstock.com/image-photo/fantasy-cartoon-artistic-image-tom-260nw-2600504163.jpg",
discription:"Tom and jarry"
},
{
id:3,
src:"https://www.shutterstock.com/image-photo/fantasy-cartoon-artistic-image-tom-260nw-2600504163.jpg",
discription:"Tom and jarry"
},
{
id:4,
src:"https://www.shutterstock.com/image-photo/fantasy-cartoon-artistic-image-tom-260nw-2600504163.jpg",
discription:"Tom and jarry"
},
];

const initialvalue={ count: 0 }

function reducer(state, action){
    switch(action.type){
        case "IN":
            return {...state,count: state.count+1};
        case "DEC":
            return {...state,count: state.count-1};
        default:
            return state;
    }
}

export const Practice=()=>{
    const [state , dispatch]=useReducer(reducer, initialvalue);

return <>
<Button1 onClick={()=>dispatch({type:"IN"})} name={"Increace" }>
</Button1>
<div>{state.count}</div>
<Button1 onClick={()=>dispatch({type:"DEC"})} name={"Decrease" }>
</Button1>
</>

}