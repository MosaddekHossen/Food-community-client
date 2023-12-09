import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from '../../../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signUp } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        // console.log(accepted)

        if (password.length < 6) {
            return Swal.fire('Oops!', "Is less than 6 characters. Your password must be at least 6 characters long.", 'error');
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire('Oops!', "Don't have a capital letter. Your password should contain uppercase letters.", 'error');
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            return Swal.fire('Oops!', "Don't have a special character.Your password should contain special characters.", 'error');
        }
        else if (!accepted) {
            Swal.fire('Oops!', 'Please accept our terms and conditions', 'error')
            return;
        }

        signUp(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire('Good job!', 'User Created Successfully!', 'success')
                e.target.reset();
                navigate("/");

                // Update Profile
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        // console.log("Update Profile!")
                        window.location.reload();
                    })
                    .catch(err => {
                        Swal.fire('Oops!', err.message, 'error')
                        console.log(err.message)
                    })
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire('Oops!', err.message, 'error')
            })
    }

    return (
        <div>
            <Helmet>
                <title>Food Sh | SignUp</title>
            </Helmet>
            <div className="text-center px-8 lg:px-0 pb-10">
                <div className="mx-auto lg:w-1/3 md:w-2/3 mt-20 p-5 rounded-lg border-2 border-[#ABABAB]">
                    <h2 className="text-3xl mb-8 mx-auto flex justify-center font-bold text-black">Create an account</h2>
                    <form onSubmit={handleRegister}>
                        <input required type="text" className="mb-4 w-full py-2 px-4 border-[#C5C5C5] border-b-2" name="name" placeholder="Your Name" id="" />
                        <br />
                        <input required type="text" className="mb-4 w-full py-2 px-4 border-[#C5C5C5] border-b-2" name="img" placeholder="Your Image" id="" />
                        <br />
                        <input required type="email" className="mb-4 w-full py-2 px-4 border-[#C5C5C5] border-b-2" name="email" placeholder="Email Address" id="" />
                        <br />
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full py-2 px-4 border-[#C5C5C5] border-b-2"
                                name="password" required
                                placeholder="Password" id="" />
                            <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        <br />
                        <div className="mb-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-1" htmlFor="terms">Accept our <a href="">Terms and conditions</a></label>
                        </div>
                        <br />
                        <input className="px-12 py-3 bg-[#F9A51A] mb-4 w-full font-bold text-black hover:text-white" type="submit" value="Create an account" />
                    </form>
                    <div className="divider">Or</div>
                    <p>Already have an account? <Link to={'/login'}><button href="" className="text-amber-500 underline">Login</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;