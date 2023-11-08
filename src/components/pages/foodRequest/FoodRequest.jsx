import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FdRequest from "./FdRequest";

const FoodRequest = () => {
    const foods = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Food Sh | FoodRequest</title>
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-24 px-8 lg:px-0">
                {
                    foods?.map(food => <FdRequest
                        key={food._id}
                        food={food}
                    ></FdRequest>)
                }
            </div>
        </>
    );
};

export default FoodRequest;