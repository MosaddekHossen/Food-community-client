import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";

const AvailableFoods = () => {
    const foods = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-24 px-8 lg:px-0">
            {
                foods?.map(food => <AvailableFood
                    key={food._id}
                    food={food}
                // foods={foods}
                // setfoods={setfoods}
                ></AvailableFood>)
            }
        </div>
    );
};

export default AvailableFoods;
