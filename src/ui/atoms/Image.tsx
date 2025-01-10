import { FC, ImgHTMLAttributes, useState } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderUrl: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, placeholderUrl, alt, ...restProps }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <>
      <img
        {...restProps}
        className={`${restProps.className} ${isLoading ? 'animate-pulse bg-gray-300' : ''}`}
        src={imageError || !src ? placeholderUrl : src}
        onLoad={handleImageLoad}
        onError={handleImageError}
        alt={alt}
      />
    </>
  );
};

export default Image;
