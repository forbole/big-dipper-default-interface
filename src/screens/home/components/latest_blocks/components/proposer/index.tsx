import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useGetStyles } from './styles';
import { ProposerProps } from './types';
import { proposerUtils } from './utils';

const Proposer = (props:ProposerProps) => {
  const { classes } = useGetStyles();
  const {
    id,
    display,
  } = props;
  const { handleClick } = proposerUtils();

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${id}`}>
        <a>
          <p className={classnames(classes.root)}>{display}</p>
        </a>
      </Link>
    </span>
  );
};

export default Proposer;
