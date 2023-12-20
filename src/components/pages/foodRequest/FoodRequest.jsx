import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { ClipLoader } from 'react-spinners';

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequest] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/request/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRequest(data)
                setLoading(false)
            })
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
                fetch(`http://localhost:5000/request/${_id}`, {
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
            {isLoading ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <ClipLoader color="#36D7B7" loading={isLoading} size={150} />
                </div>
            ) : requests.length === 0 ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <h1>No food request available!</h1>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto mt-28 mb-14 px-8 lg:px-0"> {/* h-[77vh] */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="font-bold text-2xl">
                                    <th></th>
                                    <th>Donor Name:</th>
                                    <th>Expire Date:</th>
                                    <th>Amount:</th>
                                    <th>Pickup Location:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {requests?.map((food, index) => (
                                    <tr key={food._id} className="text-[16px] font-semibold">
                                        <th>{index + 1}</th>
                                        <td>{food.userName}</td>
                                        <td>{food.expiredDate}</td>
                                        <td>${food.donationMoney}</td>
                                        <td>{food.pickupLocation}</td>
                                        <td>
                                            {food?.foodStatus == "Available" ? <a href="#" className="btn bg-red-500 text-[14px] text-white hover:bg-red-800" onClick={() => handleDelete(food._id)}>
                                                Cancel
                                            </a> : <a href="#" disabled className="btn bg-green-500 text-[14px] text-white hover:bg-green-700">
                                                Delivered
                                            </a>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

        </>
    );
};

export default FoodRequest;