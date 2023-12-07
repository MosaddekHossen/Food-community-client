import { Helmet } from "react-helmet";
import FdRequest from "./FdRequest";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${user.email}`)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [user.email])

    return (
        <>
            <Helmet>
                <title>Food Sh | FoodRequest</title>
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-24 px-8 lg:px-0">
                {
                    requests?.map(food => <FdRequest
                        key={food._id}
                        food={food}
                    ></FdRequest>)
                }
            </div>
        </>
    );
};

export default FoodRequest;