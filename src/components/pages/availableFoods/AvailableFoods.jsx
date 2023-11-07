import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {
    const foods = useLoaderData();

    // foods={foods}
    // setfoods={setfoods}
    return (<>
        <Helmet>
            <title>Food Sh | AvailableFood</title>
        </Helmet>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-24 px-8 lg:px-0">
            {
                foods?.map(food => <AvailableFood
                    key={food._id}
                    food={food}
                ></AvailableFood>)
            }
        </div>
    </>
    );
};

export default AvailableFoods;
