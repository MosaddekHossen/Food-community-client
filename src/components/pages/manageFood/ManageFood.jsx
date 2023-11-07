import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import PropTypes from 'prop-types';

const ManageFood = ({ food }) => {
    const { foodImage } = food || {};
    //  _id, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userImage,

    return (
        <div>
            <div className="max-w-7xl mx-auto my-20 p-5">
                <table className="w-full">
                    <tbody>
                        <tr className="flex items-center justify-between shadow-xl mb-2">
                            <th>
                                <button className="btn btn-sm btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="rounded w-24 h-24">
                                        <img src={foodImage} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {/* {service} */}
                            </td>
                            <td>
                                one
                            </td>
                            <td>
                                three
                            </td>
                            {/* <td>{date}</td> */}
                            {/* <td>${price}</td> */}
                            <th>
                                {/* {status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : */}
                                <div className="grid gap-2">
                                    <button className="btn btn-info btn-sm text-3xl font-bold p-1 h-auto"><MdModeEdit /></button>
                                    <button className="btn btn-error btn-sm text-3xl font-bold p-1 h-auto"><MdDeleteForever /></button>
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