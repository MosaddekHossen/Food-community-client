import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const FoodUpdate = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const { _id, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodImage } = food || {};
    const { photoURL, displayName, email } = user || {};

    const handleUpdate = event => {
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
        fetch(`https://63-community-food-sharing-server.vercel.app/food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Food successfully!',
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
                <title>Food Sh | Update</title>
            </Helmet>
            <div className="mt-24 mb-10 max-w-5xl lg:px-24 px-10 pt-14 pb-10 rounded-md bg-[#F4F3F0] mx-auto text-center">
                <h2 className="text-4xl font-bold text-indigo-400 pb-10">Update A Food</h2>
                <form onSubmit={handleUpdate}>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label>
                                <input type="text" required name="foodName" defaultValue={foodName} placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <label>
                                <input type="number" required name="foodQuantity" defaultValue={foodQuantity} placeholder="Food Quantity" className="input input-bordered w-full" />
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
                                <input type="text" required defaultValue={pickupLocation} name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Expired Date</span>
                            </label>
                            <label>
                                <input type="date" required defaultValue={expiredDate} name="expiredDate" placeholder="Expired Date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="form-control md:w-full pb-5">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={foodImage} required name="foodImage" placeholder="Food Image" className="input input-bordered w-full" />
                        </label>
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
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2 pb-7">
                            <label className="label">
                                <span className="label-text">User Image</span>
                            </label>
                            <img className='w-[100px] h-[100px] object-cover' name="userImage" src={photoURL} alt="Food Image" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Status</span>
                            </label>
                            <select name="foodStatus" id="food" className="input input-bordered w-full">
                                <option value="available">Available</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-full pb-5">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="p-5" defaultValue={additionalNotes} required name="additionalNotes" id="add" rows="5" placeholder="Additional Notes"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Update" />
                </form>
            </div>
        </>
    );
};

export default FoodUpdate;