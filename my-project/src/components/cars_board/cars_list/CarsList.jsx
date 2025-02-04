import Card from "./card/Card";

const CarsList = ({ show, search }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {search.map((car) => (
          <div className="" key={car.id}>
            <Card show={show} car={car} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarsList;
