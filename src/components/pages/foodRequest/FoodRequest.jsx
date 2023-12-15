import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch(`https://63-community-food-sharing-server-lzsqjvm0b-mosaddek.vercel.app/request/${user.email}`)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [user.email])

    const handleDelete = _id => {

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
                fetch(`https://63-community-food-sharing-server-lzsqjvm0b-mosaddek.vercel.app/request/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Request has been deleted.',
                                'success'
                            )
                            const remaining = requests.filter(food => food._id !== _id);
                            setRequest(remaining);
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>SurplusSaver | FoodRequest</title>
            </Helmet>
            {requests.length == 0 ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center"><h1>No food available!</h1></div>
            ) : <div className="max-w-7xl mx-auto mt-28 mb-14 px-8 lg:px-0"> {/* h-[77vh] */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-2xl">
                                <th></th>
                                <th>Donar Name:</th>
                                <th>Expire Date:</th>
                                <th>Amount:</th>
                                <th>Pickup Location:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                requests?.map((food, index) => (
                                    <tr key={food._id} className="text-[16px] font-semibold">
                                        <th>{index + 1}</th>
                                        <td>{food.userName}</td>
                                        <td>{food.expiredDate}</td>
                                        <td>${food.foodStatus}</td>
                                        <td>{food.pickupLocation}</td>
                                        <td>
                                            <a href="#" className="btn bg-red-400 text-[14px] text-white hover:bg-red-200" onClick={() => handleDelete(food._id)}>
                                                Cancel
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            }

        </>
    );
};

export default FoodRequest;