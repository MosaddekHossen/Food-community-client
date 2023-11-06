import Cards from "../cards/Cards";
import Slider from "./Slider";
import SingleCar from "./singleCar";

const Home = () => {

    const containerStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1699117652~exp=1699118252~hmac=de378d71376c9161300c2a060165e9595926c34ddebc57c4115e1357fc1901c7")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        width: "100%",
    };

    return (
        <>
            <div style={containerStyle}>
                <div className="flex items-center justify-center h-[91vh] px-8 lg:px-0">
                    <h1 className="lg:text-5xl text-3xl text-white font-bold text-center">Community Food Sharing <br /> and Surplus
                        Reduction Platform!!!</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <SingleCar></SingleCar>
                <Cards></Cards>
                <Slider></Slider>
            </div>
        </>
    );
};

export default Home;