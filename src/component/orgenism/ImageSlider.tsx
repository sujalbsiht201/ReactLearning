import React, { useReducer } from 'react';

// Image URLs
const images = [
  'https://picsum.photos/id/237/400/300',
  'https://picsum.photos/id/238/400/300',
  'https://picsum.photos/id/239/400/300',
];

// Reducer Function
const imageReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return { index: (state.index + 1) % images.length };
    case 'PREV':
      return { index: (state.index - 1 + images.length) % images.length };
    default:
      return state;
  }
};

export function ImageSlider() {
  const [state, dispatch] = useReducer(imageReducer, { index: 0 });

  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={images[state.index]}
        alt="Slider"
        className="w-[400px] h-[300px] object-cover rounded shadow"
      />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: 'PREV' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={() => dispatch({ type: 'NEXT' })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
