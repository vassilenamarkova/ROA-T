import React from 'react';

export default function InfiniteCarousel() {
  const [setScrollPosition] = React.useState(0);
  const containerRef = React.useRef(null);
  
  const images = [
    "/coolgirl.jpg",
  "/FlowKeks.jpg",
  "/flowcethiopia.jpg",
  "/mate.jpg",
  "/cafeatflow.jpg",
  "/matcha.jpg",
  "/flowcafe.jpg"
  ];

  // Triple the images for infinite scrolling effect
  const infiniteImages = [...images, ...images, ...images];
  const imageWidth = 200 + 3.2; // width + gap
  const totalWidth = imageWidth * images.length;

  const handleScroll = (e) => {
    const container = e.target;
    let newScrollPosition = container.scrollLeft;
    
    // Reset position when reaching the end of first or third set
    if (newScrollPosition >= totalWidth * 2) {
      // At the end, jump back to middle set
      container.scrollLeft = totalWidth;
      newScrollPosition = totalWidth;
    } else if (newScrollPosition <= 0) {
      // At the beginning, jump forward to middle set
      container.scrollLeft = totalWidth;
      newScrollPosition = totalWidth;
    }
    
    setScrollPosition(newScrollPosition);
  };

  React.useEffect(() => {
    // Start in the middle set for seamless infinite scrolling
    if (containerRef.current) {
      containerRef.current.scrollLeft = totalWidth;
    }
  }, [totalWidth]);

  return (
    <div style={{
      position: "absolute", 
      bottom: "-1170px",
      left: "0",
      right: "0",
      padding: "1rem",
      overflowX: "auto",
      whiteSpace: "nowrap",
      zIndex: 9999,
      background: "white",
    }}>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: "0.2rem",
          overflowX: "auto",
          scrollBehavior: "auto", // Disable smooth scroll for instant jumps
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc #f9f9f9"
        }}
      >
        {infiniteImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${(index % images.length) + 1}`}
            style={{
              width: "200px",
              height: "240px",
              objectFit: "cover",
              flexShrink: 0,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #f9f9f9;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
    </div>
  );
}