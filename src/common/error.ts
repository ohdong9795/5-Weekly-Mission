import { SyntheticEvent } from 'react';
import noImage from '../assets/images/noImage.jpg';

export const handleImageError = (e: SyntheticEvent) => {
  const target = e.target as HTMLImageElement;
  target.src = noImage;
};
