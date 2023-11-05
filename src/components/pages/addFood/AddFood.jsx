import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../assets/provider/AuthProvider";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const { photoURL, displayName, email } = user || {};

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const des = form.des.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const AddProduct = { name, brandName, type, price, des, rating, image }
        // console.log(AddProduct);

        // Send data to the server
        fetch('https://57-brand-shop-server-dcrbc5ziv-mosaddek.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add product successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
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
                            <input type="text" required name="name" placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label>
                            <input type="text" required name="brandName" placeholder="Food Quantity" className="input input-bordered w-full" />
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
                            <input type="text" required name="name" placeholder="Pickup Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Expired Date</span>
                        </label>
                        <label>
                            <input type="date" required name="brandName" placeholder="Expired Date" className="input input-bordered w-full" />
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
                            <input type="text" required name="des" placeholder="Additional Notes" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label>
                            <input type="text" required name="rating" placeholder="Available" className="input input-bordered w-full" />
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
                            <input required type="text" name="type" placeholder="User Name" defaultValue={displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label>
                            <input type="email" required name="price" placeholder="User Email" defaultValue={email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="form-control md:w-full pb-5">
                    <label className="label">
                        <span className="label-text">User Image</span>
                    </label>
                    <label>
                        <input type="text" required name="image" placeholder="User Image" defaultValue={photoURL} className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Form row */}
                <div className="form-control md:w-full md:mb-10 pb-5">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <label>
                        <input type="text" required name="image" placeholder="Food Image" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Add Food" />
            </form>
        </div>
    );
};

export default AddFood;