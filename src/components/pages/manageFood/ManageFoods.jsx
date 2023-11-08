import { useLoaderData } from "react-router-dom";
import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";
import { useState } from "react";

const ManageFoods = () => {
    const mgFoods = useLoaderData()
    const [foods, setFoods] = useState(mgFoods);

    return (<>
        <Helmet>
            <title>Food Sh | ManageFoods</title>
        </Helmet>
        <div className="px-8 lg:px-0">
            {
                foods?.map((food, index) => <ManageFood
                    key={index}
                    food={food}
                    foods={foods}
                    setFoods={setFoods}
                ></ManageFood>)
            }
        </div>
    </>
    );
};

export default ManageFoods;