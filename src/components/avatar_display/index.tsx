import React from 'react';
import { AvatarDisplay } from 'big-dipper-default-ui';
/**
 * Helper to get the image based on identity
 */
const AvatarDisplayHelper = (props:any) => {
  const {
    imageUrl,
    display,
  } = props;
  return (
    <AvatarDisplay
      imageUrl={imageUrl}
      title={display}
    />
  );
};

export default AvatarDisplayHelper;
