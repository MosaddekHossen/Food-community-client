import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMaFo = () => {
    const allData = useLoaderData();

    const handleUpdate = (status) => {
        fetch(`https://63-community-food-sharing-server.vercel.app/request/${status._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                location.reload();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Status change successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <>
            <div className="rounded-md my-12 py-12 bg-[#F4F3F0] text-center">
                <h2 className="text-4xl mb-3 text-purple-500 p-2 font-extrabold">Manage A Single Food</h2>
                <div className="max-w-7xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-2xl">
                                    <th>Requester Name</th>
                                    <th>Requester Image</th>
                                    <th>Requester Email</th>
                                    <th>Request Time & Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {
                                allData?.map(item => <>
                                    <tbody>
                                        <tr key={item._id}>
                                            <th>
                                                {item.userName}
                                            </th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask rounded-full w-12 h-12">
                                                        <img src={item.userImage} alt="Image" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.userEmail}
                                            </td>
                                            <td>
                                                {item.expiredDate}
                                            </td>
                                            <th>
                                                {
                                                    item.foodStatus == "Available" ?
                                                        <button onClick={() => handleUpdate(item)} className="px-6 text-white font-bold py-2 rounded-lg bg-green-600 hover:bg-green-800">Available</button> :
                                                        <button disabled className="btn btn-disabled">Delivered</button>
                                                }
                                            </th>
                                        </tr>
                                    </tbody>
                                </>)
                            }

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleMaFo;