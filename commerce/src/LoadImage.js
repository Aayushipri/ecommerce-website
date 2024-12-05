import React, { useEffect, useState } from "react";

const LoadImage = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % item.source.length);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  });

  const showLastImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < item.source.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="imageHeight">
      <div className="itemDisplay">
        <div onClick={showLastImage} className="arrowStyle">
          {"<"}
        </div>
        <img
          src={item.source[currentImageIndex]}
          width={300}
          height={400}
          alt="coordsetimage"
        />
        <div onClick={showNextImage} className="arrowStyle">
          {">"}
        </div>
      </div>
      {item.card}
    </div>
  );
};
export default LoadImage;
