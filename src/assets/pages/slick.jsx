import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slickk = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Ahsan Bhati",
      location: "UK",
      rating: 99,
      message:
        "Had a wonderful experience for 5 days with this company. My wife and I felt safe, and the driver was very friendly and always on time. Highly recommend their services.",
    },
    {
      id: 2,
      name: "Dr Saleem",
      location: "Karachi",
      rating: 99,
      message:
        "Excellent service by Nafees Rent A Car. The team was professional, accommodating, and punctual every single day. Will book again on future visits.",
    },
    {
      id: 3,
      name: "Abdula Malik",
      location: "Canada",
      rating: 99,
      message:
        "Great service provided! The driver was nice and professional. Rates are affordable. A good choice for overseas Pakistanis visiting Karachi.",
    },
    {
      id: 4,
      name: "Sarah Khan",
      location: "Australia",
      rating: 98,
      message:
        "Fantastic experience! The service exceeded my expectations. The car was clean, the driver was knowledgeable about routes, and the rates were reasonable.",
    },
    {
      id: 5,
      name: "Ali Rehman",
      location: "Pakistan",
      rating: 97,
      message:
        "Highly recommend Nafees Rent A Car! The staff was extremely cooperative, and the process was hassle-free. Looking forward to using their services again.",
    },
    {
      id: 6,
      name: "Emma Johnson",
      location: "USA",
      rating: 100,
      message:
        "Unparalleled service and professionalism! The driver was courteous and punctual. Thank you for making our trip stress-free and enjoyable.",
    },
    {
      id: 7,
      name: "Mohammad Zubair",
      location: "Saudi Arabia",
      rating: 96,
      message:
        "Affordable and reliable service. The car was in excellent condition, and the driver made sure we reached our destinations safely and on time.",
    },
    {
      id: 8,
      name: "Linda White",
      location: "UK",
      rating: 94,
      message:
        "Wonderful service! I felt completely at ease traveling with Nafees Rent A Car. The driver was polite and very professional.",
    },
    {
      id: 9,
      name: "Ahmad Qureshi",
      location: "UAE",
      rating: 99,
      message:
        "Top-notch service! I appreciated the professionalism and promptness of the staff. Highly recommended for all travelers.",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-16 max-w-7xl">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute top-0 right-0">
                <div className="w-16 h-16 bg-amber-400 rounded-bl-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl -rotate-45 transform translate-x-2 -translate-y-2">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">From {testimonial.location}</p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
