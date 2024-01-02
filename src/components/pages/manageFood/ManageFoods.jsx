import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { ClipLoader } from 'react-spinners'; 

const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://63-community-food-sharing-server.vercel.app/foods/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [user.email]);

    return (
        <>
            <Helmet>
                <title>SurplusSaver | ManageFoods</title>
            </Helmet>
            {isLoading ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <ClipLoader color="#36D7B7" loading={isLoading} size={150} />
                </div>
            ) : foods.length > 0 ? (
                <div className="px-8 lg:px-0 mt-24">
                    {foods.map((food, index) => (
                        <ManageFood key={index} food={food} foods={foods} setFoods={setFoods} />
                    ))}
                </div>
            ) : (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <h1>You have not added any Food!</h1>
                </div>
            )}
        </>
    );
};

export default ManageFoods;
