import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Modal = ({ food }) => {
    const { foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userImage, foodImage } = food || {};

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box max-w-5xl">
                <form method="dialog">
                    <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="shadow-xl mt-10">
                    <figure className="px-2 pt-2">
                        <img src={foodImage} alt="Food" className="rounded-xl h-full w-full" />
                    </figure>
                    <div className="flex items-center mt-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={userImage} />
                            </div>
                        </label>
                        <div className="pl-3">
                            <h3 className="font-semibold">{userName}</h3>
                        </div>
                    </div>
                    <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Food Name: {foodName}
                    </p>
                    <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Brand Name: {foodStatus}
                    </p>
                    <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Brand Name: {foodQuantity}
                    </p>
                    <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Brand Name: {pickupLocation}
                    </p>
                    <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Pickup Location: { }
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Expired Date: {expiredDate}
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            Additional Notes: {additionalNotes}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <div>
                            <div className="form-control mb-2 lg:mb-0">
                                <Link to={''}>
                                    <input onClick={() => document.getElementById('my_modal_3').showModal()} type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="View Detail" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
Modal.propTypes = {
    food: PropTypes.object
}
export default Modal;