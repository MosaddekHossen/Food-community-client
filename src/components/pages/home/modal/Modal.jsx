import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Modal = ({ food }) => {
    const { foodName, foodQuantity, pickupLocation, expiredDate, userName, foodImage } = food || {};
    const { user } = useContext(AuthContext);
    const { email } = user || {};

    const handleRequest = event => {
        event.preventDefault();
        const form = event.target;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;
        const userEmail = form.userEmail.value;
        const foodImage = form.foodImage.value;

        const AddFood = { foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userEmail, foodImage }

        // Send data to the server
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Add Your Request Food successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box max-w-5xl">
                <form method="dialog">
                    <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* <div className="shadow-xl mt-10"> */}
                <form onSubmit={handleRequest}>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <img className='w-full md:w-1/2 mx-auto h-[200px] object-cover' name="foodImage" defaultValue={foodImage} src={foodImage} alt="Food Image" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label>
                                <input type="email" required name="userEmail" placeholder="User Email" readOnly defaultValue={email} className="input input-bordered w-full" />
                            </label>
                            <label className="label">
                                <span className="label-text">Donation Money</span>
                            </label>
                            <label>
                                <input type="number" required name="foodStatus" placeholder="Donation Money" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Notes</span>
                            </label>
                            <textarea name="additionalNotes" className='border-slate-500 p-3 mb-5 border' id="2" required placeholder="Additional Notes" cols="10" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Request Submit" />
                </form>
                {/* </div> */}
            </div>
        </dialog>
    );
};
Modal.propTypes = {
    food: PropTypes.object
}
export default Modal;
