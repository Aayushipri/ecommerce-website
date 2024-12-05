import Image1 from "./contents/saree1.webp";
import Image2 from "./contents/saree2.webp";
import Image3 from "./contents/saree3.webp";
import Image4 from "./contents/saree4.webp";
import Image5 from "./contents/image5.webp";
import ImagePreview11 from "./contents/sareepreview11.webp";
import ImagePreview12 from "./contents/saree1preview2.webp";
import ImagePreview13 from "./contents/saree1preview3.webp";
import ImagePreview21 from "./contents/imagePreview21.webp";
import ImagePreview22 from "./contents/imagePreview22.webp";
import ImagePreview31 from "./contents/imagePreview31.webp";
import ImagePreview32 from "./contents/imagePreview32.webp";
import ImagePreview33 from "./contents/imagePreview33.webp";
import ImagePreview51 from "./contents/imagePreview51.webp";
import ImagePreview52 from "./contents/imagePreview52.webp";
import ImagePreview53 from "./contents/imagePreview53.webp";
import video1 from "./contents/video1.mp4";
import video2 from "./contents/video2.mp4";
import videoImage2 from "./contents/video-image2.png";
import videoImage1 from "./contents/video-image1.png";
import coordLower from "./contents/coordLower.png";
import ProductCard from "./ProductCard";

export const content = [
  {
    source: [Image1, ImagePreview11, ImagePreview12, ImagePreview13],
    id: Math.floor(Math.random() * 500) + 1,
    type: "image",
    card: <ProductCard image={[Image1]} name={"pink saree"} price="324" />,
  },
  {
    source: video1,
    type: "video",
    card: <ProductCard image={[videoImage1]} name={"blue"} price="324" />,
  },
  {
    source: [Image2, ImagePreview21, ImagePreview22],
    id: Math.floor(Math.random() * 500) + 1,
    type: "image",
    card: <ProductCard image={[Image2]} name={"gorget saree"} price="324" />,
  },
  {
    source: video2,
    type: "video",
    card: <ProductCard image={[videoImage2]} name={"blue"} price="324" />,
  },
  {
    source: [Image3, ImagePreview31, ImagePreview32, ImagePreview33],
    id: Math.floor(Math.random() * 500) + 1,
    type: "image",
    card: <ProductCard image={[Image3]} name={"silk saree"} price="324" />,
  },
  {
    source: [Image4],
    id: Math.floor(Math.random() * 500) + 1,
    type: "image",
    card: <ProductCard image={[Image4]} name={"siffon saree"} price="324" />,
  },
  {
    source: [Image5, ImagePreview51, ImagePreview52, ImagePreview53],
    id: Math.floor(Math.random() * 500) + 1,
    type: "image",
    card: (
      <ProductCard
        image={[Image5, coordLower]}
        name={"siffon saree"}
        price="324"
      />
    ),
  },
];
