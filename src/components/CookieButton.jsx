"use client"

const CookieButton = ({ buttonText, onClick }) => {

  return (
    <button
    onClick={onClick}
    className="w-[100%] text-black bg-gray-200 py-3 rounded-xl text-xl font-sans">
      {buttonText}
    </button>
  );
};

export default CookieButton;
