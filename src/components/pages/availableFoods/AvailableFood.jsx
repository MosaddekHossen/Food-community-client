import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AvailableFood = ({ food }) => {
    const { _id, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userImage, foodImage } = food || {};
    //  userEmail,

    return (
        <>
            <div className="card shadow-xl h-full mt-5">
                <figure className="px-2 pt-2">
                    <img src={foodImage} alt="Car" className="rounded-xl h-[300px] object-cover w-full" />
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
                <div className="p-5 ml-2">
                    <p>Food Quantity: {foodQuantity}</p>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Food Name: {foodName}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Status: {foodStatus}
                </p>
                <div className="p-6">
                    <div className="mb-2 md:flex items-center justify-between">
                        <p className="block mb-3 md:mb-0 font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Pickup Location: {pickupLocation}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        Expire Date: {expiredDate}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
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