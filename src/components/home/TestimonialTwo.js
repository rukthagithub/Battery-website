import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";

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

const TestimonialsTwo = () => {
  const settings = {
    className: "center",
    centerPadding:"10px",
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,

    loop: true,
    // autoplay: true,
    autoplaySpeed: 0,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,

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
      <div className="py-20 ">
        {/* <Heading
          title="Testimonials"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s"
        /> */}
        <Slider {...settings} className="max-w-5xl mx-auto">
          {review.map((obj, e) => {
            return (
              <div key={e} className="p-4">
                <div className="w-72 card outer border-1 border-[#1d1c1c] p-5 space-y-6 rounded-xl drop-shadow-sm shadow-lg  bg-secondary">
                  <img
                    src="/assets/images/testimonials.png"
                    className="w-20 h-20"
                  />
                  <h2 className="font-semibold">Komal Kaushik</h2>
                  <p className="text-sm">
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

export default TestimonialsTwo;
