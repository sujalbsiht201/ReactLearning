export const Container = ({ children }) => {
    return <>
        <div className="max-w-6xl w-full mx-auto border bg-black">       
            { children }
        </div>
    </>
};