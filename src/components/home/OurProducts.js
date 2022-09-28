import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { AiOutlineArrowRight } from "react-icons/ai";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const productData = [
  {
    id: 1,
    pimage: "/assets/images/productimg.png",
    pname: "Tubular Batteries",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer when an unknown printer took a",
    bgcolor: "group-hover:text-white",
  },
  {
    id: 2,
    pimage: "/assets/images/productimg.png",
    pname: "Inverter Batteries",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer when an unknown printer took a",
    bgcolor: "group-hover:text-white",
  },
  {
    id: 3,
    pimage: "/assets/images/productimg.png",
    pname: "Solar  Batteries",
    desc: "Lorem Ipsum is simply dummy text  of the printing and typesetting Lorem Ipsum has been the industrys standard dummy text ever since the ",
    bgcolor: "group-hover:text-white",
  },
  {
    id: 4,
    pimage: "/assets/images/productimg.png",
    pname: "E-Rickshaw Batteries",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer when an unknown printer took a",
    bgcolor: "group-hover:text-white",
  },
  {
    id: 5,
    pimage: "/assets/images/productimg.png",
    pname: "Automative Batteries",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer when an unknown printer took a",
    bgcolor: "group-hover:text-white",
  },
];

const OurProducts = () => {
  const settings = {
    className: "center",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    speed: 2000,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-20 space-y-8 proSlider">
        <div className="px-12">
          <Heading
            title="Our Products"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
          />
        </div>
        <Slider {...settings} className="max-w-5xl mx-auto">
          {productData.map((item) => (
            <>
              <div className="group py-8 px-4">
                <div className="relative h-96 border-ternary drop-shadow-md group-hover:bg-primary  bg-[#F1F1F1] flex flex-col justify-between items-start  rounded-xl">
                  <div>
                    <img
                      src={item.pimage}
                      alt="image"
                      className="  rounded-t-xl"
                    />
                  </div>
                  <h3
                    className={`${item.bgcolor} text-black text-xl font-semibold pt-3 px-5`}
                  >
                    {item.pname}
                  </h3>

                  <p
                    className={`${item.bgcolor} text-black   text-justify px-5 text-sm pb-10`}
                  >
                    {item.desc}
                  </p>

                  <div className=" bg-primary p-2 rounded-full group-hover:bg-black absolute -bottom-5 right-10">
                    <AiOutlineArrowRight
                      size={24}
                      className="text-white group-hover:text-white  cursor-pointer hover:translate-x-2 duration-150 "
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OurProducts;
