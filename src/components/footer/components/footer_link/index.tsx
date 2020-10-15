import React from 'react';
import Link from 'next/link';

const FooterLink = (props:any) => {
  const {
    url,
    display,
  } = props;
  return (
    <Link
      href={url}
    >
      <a href={url}>
        {display}
      </a>
    </Link>
  );
};

export default FooterLink;
