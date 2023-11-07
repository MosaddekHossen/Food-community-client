import { Link } from "react-router-dom";

const SingleCar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-16 text-center">
                <h2 className="lg:text-5xl text-3xl font-bold mb-5">NEW FOOD</h2>
                <div className="lg:h-full">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className="lg:w-1/2 w-full lg:h-full md:h-[400px]" src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?w=996&t=st=1699284540~exp=1699285140~hmac=356b940a0eef81d6351c5630859013a99e5ddfc03381812967df31f7ade4d696" />
                        <div className="mt-1">
                            <h1 className="md:text-5xl text-3xl font-bold">It is the food and groceries you love, delivered</h1>
                            <p className="py-6">It is simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas - in a heartbeat!

                                Interested? Let is start our partnership today!</p>
                            <Link to={'/availableFoods'}><button className="btn btn-ghost bg-violet-400">SEE ALL FOOD</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleCar;