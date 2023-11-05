import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";

const Cards = () => {
    const foods = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-24 px-8 lg:px-0">
            {
                foods?.slice(0, 6).map(food => <Card key={food._id} food={food}></Card>)
            }
        </div>
    );
};

export default Cards;