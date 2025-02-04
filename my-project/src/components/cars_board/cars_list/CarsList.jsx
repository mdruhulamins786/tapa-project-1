import BuyButton from "./Buy_Button/BuyButton";

const CarsList = ({ show, search }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {search.map((car) => {
          const { title, brand, year, price, isPremium } = car;
          return (
            <div className="" key={car.id}>
              <div className="border rounded-md p-5">
                <p className="text-orange-500 text-xl font-semibold mb-2">
                  {title}
                </p>
                <p>Brand: {brand}</p>
                <p>Year: {year}</p>
                <p>Price: {price}</p>
                <p>Premium: {isPremium ? "Yes" : "No"}</p>
                <BuyButton>Buy Now</BuyButton>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CarsList;
