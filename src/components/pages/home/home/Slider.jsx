import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Slider = () => {
    const allData = useLoaderData();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (<>
        <div className='md:mb-20 mb-10' data-aos="zoom-in">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="lg:text-5xl text-3xl font-bold mb-10">Foods Slider</h2>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={true}
            >
                {
                    allData?.map(data => (
                        <SwiperSlide key={data._id}>
                            <img
                                className='md:h-[300px] object-cover lg:h-[400px] h-[150px]'
                                src={data?.foodImage}
                                alt={`Food Image ${data._id}`}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
    );
};

export default Slider;