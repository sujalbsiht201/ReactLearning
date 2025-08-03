export const Button = ({onClick , on}) => {
    alert(on)
  return (
    <div>
      <button
        className="bg-blue-600 text-white rounded-full px-2 p-2 hover:bg-blue-800 " onClick={onClick} 
    >
        <i className="fa-solid fa-mobile-button"></i>Search
      </button>
      <button className="bg-rose-600 text-white rounded-full px-2 p-2 hover:bg-blue-800">
        <i className="fa-solid fa-mobile-button"></i>Search
      </button>
    </div>
  );
};
