import Slider from "react-slick";

const images = [
  "/flowinterior.jpg",
  "/flowcoffee.jpg",
  "/flowoutside.jpg"
];

export default function Slideshow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true
  };

  return (
    <div style={{ 
        position: "absolute", // Needed for 'left' to take effect
        top: "4%",            // Optional: if you also want to shift it down
        left: "5%",
        width: "26%"
        }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100%", borderRadius: "1rem", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      
    </div>
  );
}
