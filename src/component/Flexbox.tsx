export const Flexbox = () => {

    return <>
        <div className="h-screen flex justify-center items-center bg-white-400">
            <div className="h-100 size-140 flex flex-col justify-evenly items-center bg-white-500 p-4">
                <h1 className="text-blue text-center text-5xl bg-white-500  p-4">Glory</h1>
                
                <div className="bg-white-500 p-4 rounded-3xl">
                    <input className="bg-white w-lg my- p-5 px-8 rounded-full border-2" placeholder="Search Google or type URL" />
                </div>

                <div className="flex justify-between">
                    <div className="bg-blue-500 rounded-3xl m-2 py-2 px-4">code</div>    
                    <div className="bg-blue-500 rounded-3xl m-2 py-2 px-4">code</div>
                    <div className="bg-blue-500 rounded-3xl m-2 py-2 px-4">code</div>
                    <div className="bg-blue-500 rounded-3xl m-2 py-2 px-4">code</div>
                </div>
            </div>
        </div>
    </>
}