import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [user.email])

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