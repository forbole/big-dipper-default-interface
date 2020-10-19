import React from 'react';
import { StoreBadgeProps } from './types';

const StoreBadge = (props:StoreBadgeProps) => {
  const {
    url,
    className,
    image,
    alt,
  } = props;
  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={image}
        alt={alt}
        title={alt}
      />
    </a>
  );
};

export default StoreBadge;
