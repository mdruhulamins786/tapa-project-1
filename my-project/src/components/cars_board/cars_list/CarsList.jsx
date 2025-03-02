import { FaStar } from "react-icons/fa";

const CarsList = ({ onAddCars, search, onIsFavourite }) => {
  return (
    <>
      <p className="text-2xl font-bold m-4 text-center">All Cars</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {search.map((car) => {
          const { id, title, brand, year, price, isPremium } = car;
          return (
            <div className="" key={car.id}>
              <div className="border rounded-md p-5">
                <div className="mb-2 flex justify-between items-center ">
                  <p className="text-orange-500 text-xl font-semibold">
                    {title}
                  </p>
                  <button onClick={() => onIsFavourite(id)}>
                    <FaStar color={isPremium ? "red" : "black"} />
                  </button>
                </div>
                <p>Brand: {brand}</p>
                <p>Year: {year}</p>
                <p>Price: {price}</p>
                <p>Premium: {isPremium ? "Yes" : "No"}</p>
                <button
                  onClick={() => onAddCars(car)}
                  className="bg-orange-500 mt-3 w-full rounded-sm text-white font-semibold p-1"
                >
                  Shop
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CarsList;
