export const Container = ({ children }) => {
    return <>
        <div className="max-w-7xl w-full mx-auto border bg-black">       
            { children }
        </div>
    </>
};