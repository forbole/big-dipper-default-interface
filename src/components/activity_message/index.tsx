import React from 'react';
import { TypeTag } from './components';
import { useGetStyles } from './styles';
import { getMessageByType } from './utils';
/**
 * Component that returns based on message type
 */
const ActivityMessage = () => {
  const { classes } = useGetStyles();
  const messageInfo = getMessageByType('/cosmos.bank.v1beta1.MsgMultiSend');
  return (
    <div className={classes.root}>
      <div className="content__body">
        <messageInfo.content />
      </div>
      <TypeTag
        type={messageInfo.tagType}
        display={messageInfo.tagDisplay}
      />
    </div>
  );
};

export default ActivityMessage;
