import React from 'react';
import { SocialMediaProps } from './types';

const SocialMedia = (props:SocialMediaProps) => {
  const {
    url,
    className,
    component: Component,
  } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <Component />
    </a>
  );
};

export default SocialMedia;
