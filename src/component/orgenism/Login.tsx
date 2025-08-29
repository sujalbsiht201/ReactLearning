export const Login = ( ) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center m-2">
        <h1 className="mx-28 text-6xl font-bold text-[#1877F2] font-sans">
          MySongs
        </h1>
        <h2 className="font-bold p-4">
          My Songs helps you to connect yourself to your own soul
        </h2>
      </div>
      <div className="shadow-2xl m-10 w-100">
        <div className="m-10">
          <input
            className="w-70 border  p-4 "
            text-stone-800
            placeholder="Email address or phone number"
          />
        </div>
        <div className="m-10">
          <input
            className="w-70 border p-4 "
            text-stone-800
            placeholder="Password"
          />
        </div>
        <div className="m-10">
          <button className="bg-blue-800 px-30 py-4 text-white font-bold hover:bg-blue-600 rounded-lg" onClick={onClick}>
            Log in
          </button>
          <div className="m-6">
            <h3 className="hover:underline text-blue-600 px-12">Forgotten password?</h3>
          </div>
          <div className="m-10">
            <button className="bg-green-600 px-8 py-4 rounded-lg text-white font-bold hover:bg-green-800">Create new account</button>
          </div>
        </div>
      </div>  
    </div>
  );
};
