import { useLoaderData } from "react-router-dom";
import ManageFood from "./ManageFood";
import { Helmet } from "react-helmet";

const ManageFoods = () => {
    const mgFoods = useLoaderData()
    //  onClick={() => handleDelete(_id)}
    //  onClick={() => HandleBookingConfirm(_id)}
    return (<>
        <Helmet>
            <title>Food Sh | ManageFoods</title>
        </Helmet>
        <div className="px-8 lg:px-0">
            {
                mgFoods?.map((food, index) => <ManageFood key={index} food={food}></ManageFood>)
            }
        </div>
    </>
    );
};

export default ManageFoods;