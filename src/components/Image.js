import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageLazy({ src, alt, className}) {

  return (
    
      <LazyLoadImage
       placeholderSrc={src}
        className={className}
        alt={alt}
        src={src}
        effect="blur"
      />
   
  );
}
