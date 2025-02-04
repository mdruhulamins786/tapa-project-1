const BuyButton = ({ children }) => {
  return (
    <button
      className={` bg-orange-500 px-3 py-1 text-white font-semibold rounded mt-3 w-full`}
    >
      {children}
    </button>
  );
};

export default BuyButton;
