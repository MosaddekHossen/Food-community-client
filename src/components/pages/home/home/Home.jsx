import Cards from "../cards/Cards";
import { Helmet } from "react-helmet";
import Slider from "./Slider";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NewFood from "./NewFood";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <Helmet>
                <title>SurplusSaver | Home</title>
            </Helmet>
            <div className="hero min-h-screen" data-aos="zoom-in" style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1699117652~exp=1699118252~hmac=de378d71376c9161300c2a060165e9595926c34ddebc57c4115e1357fc1901c7)',
                objectFit: "cover",
                backgroundPosition: "top"
            }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <h1 className="lg:text-5xl text-3xl text-white font-bold text-center">Community Food Sharing <br /> and Surplus
                        Reduction Platform!!!</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <NewFood></NewFood>
                <Cards></Cards>
                <Slider></Slider>
            </div>
        </>
    );
};

export default Home;