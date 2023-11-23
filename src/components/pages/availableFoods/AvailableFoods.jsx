import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AvailableFoods = () => {
    const foods = useLoaderData();
    // Sort
    const [filterData, setFilterData] = useState(foods);
    // console.log(filterData);
    const [asc, setAsc] = useState(true);
    // Search
    const [search, setSearch] = useState('');

    const handleFilter = () => {
        fetch(`http://localhost:5000/food?sort=${asc}&search=${search}`)
        // fetch(`http://localhost:5000/food?sort=${asc}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setFilterData(data)
            })
        setAsc(!asc)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/food?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setFilterData(data)
            })
    }

    return (<>
        <Helmet>
            <title>Food Sh | AvailableFood</title>
        </Helmet>
        <div className="text-center gap-5 mt-10 flex justify-center items-center">
            <form onSubmit={handleSearch} className="flex items-center">
                <input onChange={e => setSearch(e.target.value)} className="py-2 px-5 border-blue-400 border-2 -mr-2 rounded-md outline-none" type="text" name="search" id="" />
                <input className="py-2 px-2 hover:bg-blue-300 cursor-pointer border-blue-400 border-2 rounded-r-md bg-blue-400" type="submit" value="Search" />
            </form>
            <button onClick={handleFilter} className="btn bg-blue-400">
                {asc ? 'Sorted By Expire Date' : 'Default date'}
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
