import PropTypes from 'prop-types';

const FdRequest = ({ food }) => {
    const { pickupLocation, expiredDate, foodStatus, userName } = food || {};

    return (
        <>
            <div className="card shadow-xl h-full mt-5 bg-indigo-400 pt-10">
                <div className="flex items-center mt-2">
                    <div className="ml-7">
                        <h3 className="font-semibold">Donar Name: {userName}</h3>
                    </div>
                </div>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Your Donation Amount: ${foodStatus}
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
                </div>
                <div className="p-6 pt-0">
                    <div className="form-control mb-2 lg:mb-0">
                        <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Cancel Request" />
                    </div>
                </div>
            </div>
        </>
    );
};

FdRequest.propTypes = {
    food: PropTypes.object
}

export default FdRequest;            