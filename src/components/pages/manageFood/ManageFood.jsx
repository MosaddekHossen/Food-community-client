import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const ManageFood = ({ food }) => {
    const { _id, foodImage } = food || {};
    //   foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userImage,

    const handleDelete = _id => {
        console.log(_id)

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
                fetch(`http://localhost:5000/food/${_id}`, {
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
                            // const remaining = brands.filter(brand => brand._id !== _id);
                            // setBrands(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="max-w-7xl mx-auto my-20 p-5">
                <table className="w-full">
                    <tbody>
                        <tr className="flex items-center justify-between shadow-xl mb-2">
                            <td>
                                <div className="avatar">
                                    <div className="rounded w-40 h-40">
                                        <img src={foodImage} alt="" />
                                    </div>
                                </div>
                            </td>
                            <button
                                className="w-1/3 select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Manage
                            </button>
                            <th>
                                <div className="grid gap-2">
                                    <button className="btn btn-info btn-sm text-3xl font-bold p-1 h-auto"><MdModeEdit /></button>
                                    <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm text-3xl font-bold p-1 h-auto"><MdDeleteForever /></button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
ManageFood.propTypes = {
    food: PropTypes.object
}
export default ManageFood;