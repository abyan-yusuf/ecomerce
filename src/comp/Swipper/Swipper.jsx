import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
const Swipper = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((myProducts) => setProducts(myProducts));
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper h-96 bg-gray-700	"
      >
        {products.map((p) => (
          <SwiperSlide className="flex justify-center">
          <img
            src={p.image}
            className=""
          />
        </SwiperSlide>))}
        
      </Swiper>
    </div>
  );
};

export default Swipper;
