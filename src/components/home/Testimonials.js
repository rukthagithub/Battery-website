import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red",borderRadius:"50%",padding:"1px" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red",borderRadius:"50%",padding:"1px" }}
//       onClick={onClick}
//     />
//   );
// }

const review = [
  {
    id: 1,

    img: "/assets/images/productimg.png",
  },
  {
    id: 2,

    img: "/assets/images/productimg.png",
  },
  {
    id: 3,

    img: "/assets/images/productimg.png",
  },
  {
    id: 4,

    img: "/assets/images/productimg.png",
  },
  {
    id: 5,

    img: "/assets/images/productimg.png",
  },
  {
    id: 6,

    img: "/assets/images/productimg.png",
  },
  {
    id: 7,

    img: "/assets/images/productimg.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // centerMode: true,
    // centerPadding: "60px",
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    

    loop: true,
    autoplay: true,
    autoplaySpeed: 0,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,

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
      <div className="py-20 space-y-12 px-12 testSlider">
        <Heading
          title="Testimonials"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
        />
        <Slider {...settings} className="max-w-5xl mx-auto">
          {review.map((obj, e) => {
            return (
              <div key={e} className="p-4">
                <div className="w-76 hover:-translate-y-4 duration-300 card outer border-1 border-[#1d1c1c] p-5 space-y-6 rounded-xl drop-shadow-sm shadow-lg  bg-secondary group hover:bg-primary">
                  <img
                    src="/assets/images/testimonials.png"
                    className="w-20 h-20"
                  />
                  <h2 className="font-semibold group-hover:text-white">
                    Komal Kaushik
                  </h2>
                  <p className="text-sm group-hover:text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
