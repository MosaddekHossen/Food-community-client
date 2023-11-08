import { useLoaderData } from "react-router-dom";
import Modal from "../home/modal/Modal";

const Details = () => {
    const food = useLoaderData();
    const { foodName, userName, pickupLocation, foodQuantity, expiredDate, foodImage } = food || {};

    return (
        <div>
            <Modal food={food}></Modal>
            <div className="shadow-xl max-w-5xl mx-auto mb-24 mt-10 rounded-xl">
                <figure className="px-2 pt-2">
                    <img src={foodImage} alt="Food" className="h-full w-full" />
                </figure>
                <div className="p-5">
                    <div className="flex items-center mt-2">
                        <div className="pl-7 mb-2">
                            <h3 className="font-semibold">Donar Name: {userName}</h3>
                        </div>
                    </div>
                    <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Food Name: {foodName}
                    </p>
                    <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                        Food Quantity: {foodQuantity}
                    </p>
                    <div className="p-6">
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

export default Details;