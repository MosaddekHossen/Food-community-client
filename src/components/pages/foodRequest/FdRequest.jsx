import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const FdRequest = ({ food }) => {
    const { _id, pickupLocation, expiredDate, foodStatus, userName } = food || {};
    // console.log(_id)

    const handleDelete = _id => {
        // console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://63-community-food-sharing-server.vercel.app/request/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Brand has been deleted.',
                                'success'
                            )
                            // const remaining = foods.filter(food => food._id !== _id);
                            // setFoods(remaining);
                        }
                    })
            }
        })
    }

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
                        <input onClick={() => handleDelete(_id)} type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Cancel Request" />
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