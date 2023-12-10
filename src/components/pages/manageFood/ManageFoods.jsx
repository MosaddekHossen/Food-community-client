import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`https://63-community-food-sharing-server.vercel.app/foods/${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [user.email])

    return (<>
        <Helmet>
            <title>SurplusSaver | ManageFoods</title>
        </Helmet>
        {foods.length == 0 ? (
            <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center"><h1>No food available!</h1></div>
        ) : <div className="px-8 lg:px-0 mt-24"> {/* h-[86vh] */}
            {
                foods?.map?.((food, index) => <ManageFood
                    key={index}
                    food={food}
                    foods={foods}
                    setFoods={setFoods}
                ></ManageFood>)
            }
        </div>}

    </>
    );
};

export default ManageFoods;