import noImage from "../images/noImage.jpg";

export const handleImageError = (e) => {
  e.target.src = noImage;
}