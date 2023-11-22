import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AvailableFoods = () => {
    const foods = useLoaderData();
    const [filterData, setFilterData] = useState(foods);
    const [asc, setAsc] = useState(true);

    const handleFilter = () => {
        fetch(`http://localhost:5000/food?sort=${asc}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFilterData(data)
            })
        setAsc(!asc)
    }

    return (<>
        <Helmet>
            <title>Food Sh | AvailableFood</title>
        </Helmet>
        <div className="text-center">
            <button onClick={handleFilter} className="btn bg-blue-400 mt-10">
                {asc ? 'Default date' : 'Sorted By Expire Date'}
            </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 px-8 lg:px-0">
            {
                filterData?.map(food => <AvailableFood
                    key={food._id}
                    food={food}
                ></AvailableFood>)
            }
        </div>
    </>
    );
};

export default AvailableFoods;
