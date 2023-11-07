import { useLoaderData } from "react-router-dom";
import ManageFood from "./ManageFood";

const ManageFoods = () => {
    const mgFoods = useLoaderData()
    //  onClick={() => handleDelete(_id)}
    //  onClick={() => HandleBookingConfirm(_id)}
    return (<>
        <div className="px-8 lg:px-0">
            {
                mgFoods?.map((food, index) => <ManageFood key={index} food={food}></ManageFood>)
            }
        </div>
    </>
    );
};

export default ManageFoods;