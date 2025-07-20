export const Button= ({ label, onClick }) => {
        
    return <>  
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-800" onClick={onClick}>{ label }</button>
    </>
}