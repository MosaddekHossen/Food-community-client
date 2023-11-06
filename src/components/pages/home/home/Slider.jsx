import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return (<>
        <div className='md:mb-20 mb-10'>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="lg:text-5xl text-3xl font-bold mb-10">Foods Slider</h2>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={true}
            >
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1699193338~exp=1699193938~hmac=fe0a1333d425afd81b7d40602e4414389f3bd4ad2d22383e2fc76554cef361f4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1699193468~exp=1699194068~hmac=73390c84b6549bc5b95b9fe2a7475bdeca7591da5558a3444758a9a55856bd28" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1699193485~exp=1699194085~hmac=7860d4973f386ed43a91fcd3a2fbb910d18719a973466090fdaffc2b14b5595a" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1699193508~exp=1699194108~hmac=4c20fc42720006138887f5f6dac33b50d20a40829b0fa6efd3d6520008961822" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=996&t=st=1699193523~exp=1699194123~hmac=171d5ba6c985bd2c238091cccf8fde5cf1f16da28938c24ce77b8df8ba96e4db" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1699193338~exp=1699193938~hmac=fe0a1333d425afd81b7d40602e4414389f3bd4ad2d22383e2fc76554cef361f4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1699193468~exp=1699194068~hmac=73390c84b6549bc5b95b9fe2a7475bdeca7591da5558a3444758a9a55856bd28" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1699193485~exp=1699194085~hmac=7860d4973f386ed43a91fcd3a2fbb910d18719a973466090fdaffc2b14b5595a" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1699193508~exp=1699194108~hmac=4c20fc42720006138887f5f6dac33b50d20a40829b0fa6efd3d6520008961822" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:h-[300px] lg:h-[400px] h-[150px]' src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=996&t=st=1699193523~exp=1699194123~hmac=171d5ba6c985bd2c238091cccf8fde5cf1f16da28938c24ce77b8df8ba96e4db" />
                </SwiperSlide>
            </Swiper>
        </div>
    </>
    );
};

export default Slider;