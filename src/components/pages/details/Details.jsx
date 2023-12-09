import { useLoaderData } from "react-router-dom";
import Modal from "../home/modal/Modal";
import PropTypes from 'prop-types';

const Details = () => {
    const food = useLoaderData();
    const { foodName, userName, pickupLocation, foodQuantity, expiredDate, foodImage } = food || {};

    return (
        <div>
            <Modal food={food}></Modal>
            <div className="shadow-xl max-w-5xl mx-auto md:mb-24 mb-5 mt-24 md:w-8/12 w-full rounded-xl">
                <figure className="px-2 pt-2">
                    <img src={foodImage} alt="Food" className="h-[80vh] w-full" />
                </figure>
                <div className="py-5 px-5">
                    <div className="flex items-center mt-2">
                        <div className="mb-2">
                            <h3 className="font-semibold">Donar Name: {userName}</h3>
                        </div>
                    </div>
                    <p className="font-sans text-base font-medium text-blue-gray-900">
                        Food Name: {foodName}
                    </p>
                    <p className="font-sans py-1 mt-3 text-base font-medium text-blue-gray-900">
                        Food Quantity: {foodQuantity}
                    </p>
                    <div className="py-6">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Food Pickup Location: {pickupLocation}
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Expired Date/Time: {expiredDate}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div>
                            <div className="form-control mb-2 lg:mb-0">
                                <input onClick={() => document.getElementById('my_modal_3').showModal()} type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Request" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    food: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  };

export default Details;