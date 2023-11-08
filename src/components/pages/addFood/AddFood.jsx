import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const { photoURL, displayName, email } = user || {};

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.foodName.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userImage = form.userImage.value;
        const foodImage = form.foodImage.value;
        const AddFood = { foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, userName, userEmail, userImage, foodImage }

        // Send data to the server
        fetch('http://localhost:5000/food', {
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
                        title: 'Success!',
                        text: 'Add Food successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Food Sh | AddFood</title>
            </Helmet>
            <div className="my-14 max-w-5xl lg:px-24 px-10 py-14 rounded-md bg-[#F4F3F0] mx-auto text-center">
                <h2 className="text-4xl font-extrabold pb-10">Add A Food</h2>
                <form onSubmit={handleAdd}>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label>
                                <input type="text" required name="foodName" placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <label>
                                <input type="text" required name="foodQuantity" placeholder="Food Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <label>
                                <input type="text" required name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Expired Date</span>
                            </label>
                            <label>
                                <input type="date" required name="expiredDate" placeholder="Expired Date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <label>
                                <input type="text" required name="additionalNotes" placeholder="Additional Notes" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Status</span>
                            </label>
                            <label>
                                <input type="text" required name="foodStatus" defaultValue={"Available"} placeholder="Available" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label>
                                <input required type="text" name="userName" placeholder="User Name" readOnly defaultValue={displayName} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label>
                                <input type="email" required name="userEmail" placeholder="User Email" readOnly defaultValue={email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="form-control md:w-full pb-5">
                        <label className="label">
                            <span className="label-text">User Image</span>
                        </label>
                        <label>
                            <input type="text" required name="userImage" placeholder="User Image" readOnly defaultValue={photoURL} className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row */}
                    <div className="form-control md:w-full md:mb-10 pb-5">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label>
                            <input type="text" required name="foodImage" placeholder="Food Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Add Food" />
                </form>
            </div>
        </>
    );
};

export default AddFood;