import { Link, useLoaderData } from "react-router-dom";
import Card from "../card/Card";

const Cards = () => {
    const foods = useLoaderData();

    return (
        <>
            <div className="max-w-7xl mx-auto my-16 text-center">
                <h2 className="lg:text-5xl text-3xl font-bold mb-5">Foods Items</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-10 px-8 lg:px-0">
                    {
                        foods?.slice(0, 6).map(food => <Card key={food._id} food={food}></Card>)
                    }
                </div>
                <Link to={'/availableFoods'}><button className="btn btn-ghost bg-violet-400">SEE ALL FOOD</button></Link>
            </div>
        </>
    );
};

export default Cards;