import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AvailableFood = ({ food }) => {
    const { _id, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, userName, userImage, foodImage } = food || {};

    return (
        <>
            <div className="card shadow-xl h-full mt-5 space-y-2 text-left">
                <figure className="px-2 pt-2">
                    <img src={foodImage} alt="Car" className="rounded-xl object-cover h-[300px] w-full" />
                </figure>
                <div className="flex items-center mt-3 ml-4">
                    <label tabIndex={0} className="btn btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <label>
                                <div>
                                    <img alt="Logo" className="w-10 rounded-full cursor-pointer" src={userImage} />
                                </div>
                            </label>
                        </div>
                    </label>
                    <div className="ml-3">
                        <h3 className="font-semibold">{userName}</h3>
                    </div>
                </div>
                <h3 className="ml-6 font-sans text-base font-medium text-blue-gray-900">
                    Food Name: {foodName}
                </h3>
                <h3 className="ml-6 font-sans text-base font-medium text-blue-gray-900">
                    Quantity: {foodQuantity}
                </h3>
                <div className="p-6 space-y-2">
                    <div className="mb-2 md:flex items-center space-y-2 md:skew-y-0 justify-between">
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

            {/* Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </>
    );
};

AvailableFood.propTypes = {
    food: PropTypes.object
}

export default AvailableFood;            