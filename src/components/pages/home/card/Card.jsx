import { Link } from "react-router-dom";

const card = ({ food }) => {
    const { _id, foodName, pickupLocation, expiredDate, additionalNotes, userName, userImage, foodImage } = food || {};

    return (
        <>
            <div className="card shadow-xl h-full mt-5 space-y-2 text-left">
                <figure className="px-2 pt-2">
                    <img src={foodImage} alt="Car" className="rounded-xl h-[300px] w-full" />
                </figure>
                <div className="flex items-center mt-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 ml-5 rounded-full">
                            <img src={userImage} />
                        </div>
                    </label>
                    <div className="ml-3">
                        <h3 className="font-semibold">{userName}</h3>
                    </div>
                </div>
                    <p className="ml-6 font-sans text-base font-medium text-blue-gray-900">
                        Food Name: {foodName}
                    </p>
                <div className="p-6 space-y-2">
                    <div className="mb-2 md:flex items-center justify-between">
                        <p className="font-sans text-base font-medium text-blue-gray-900">
                            Pickup Location: {pickupLocation}
                        </p>
                        <p className="font-sans text-base font-medium text-blue-gray-900">
                            Expired Date: {expiredDate}
                        </p>
                    </div>
                    <p className="font-sans text-base font-normal text-blue-gray-900">
                        Additional Notes: {additionalNotes}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="form-control mb-2 lg:mb-0">
                        <Link to={`/details/${_id}`}><input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="View Detail" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default card;