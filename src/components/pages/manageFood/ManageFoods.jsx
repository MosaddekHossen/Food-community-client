import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { RingLoader } from 'react-spinners';

const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setLoading(false)
            })
    }, [user.email]);

    return (<>
        <Helmet>
            <title>SurplusSaver | ManageFoods</title>
        </Helmet>
        {
            loading ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <RingLoader color="#36d7b7" />
                </div>)
                : foods.length > 0 ? (
                    <div className="px-8 lg:px-0 mt-24">
                        {foods.map((food, index) => (
                            <ManageFood key={index} food={food} foods={foods} setFoods={setFoods} />
                        ))}
                    </div>)
                    : (
                        <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                            <h1>No food available!</h1>
                        </div>
                    )
        }

    </>);
};

export default ManageFoods;