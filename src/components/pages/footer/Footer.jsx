import { FaGoogle, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-gray-900">
            <footer className="footer p-10 text-white max-w-7xl mx-auto">
                <nav>
                    <header className="text-white font-bold text-2xl">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-white font-bold text-2xl">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="text-white font-bold text-2xl">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <aside>
                    <img className="h-[50px] w-[50] rounded-full" src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" alt="" />
                    <h2 className="normal-case text-3xl font-bold text-[#6531ae]">Food Sharing</h2>
                    <div className="flex gap-1 mt-4">
                        <a href="https://www.google.com/" className='bg-[#3d3b3b] p-3 text-[16px] rounded-full'><FaGoogle></FaGoogle></a>
                        <a href="https://twitter.com/" className='bg-[#3d3b3b] p-3 text-[16px] rounded-full'><FaTwitter></FaTwitter></a>
                        <a href="https://www.facebook.com/" className='bg-[#3d3b3b] p-3 text-[16px] rounded-full'><FaFacebook></FaFacebook></a>
                        <a href="https://www.youtube.com/" className='bg-[#3d3b3b] p-3 text-[16px] rounded-full'><FaYoutube></FaYoutube></a>
                    </div>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;