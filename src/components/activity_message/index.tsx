import React from 'react';
import { TypeTag } from './components';
import { useGetStyles } from './styles';
import { getMessageByType } from './utils';
import { ActivityMessageProps } from './types';

/**
 * Component that returns based on message type
 */
const ActivityMessage = (props: ActivityMessageProps) => {
  const { classes } = useGetStyles();
  const { message } = props;
  const messageInfo = getMessageByType(message.type);
  return (
    <div className={classes.root}>
      <div className="content__body">
        <messageInfo.content message={message as any} />
      </div>
      <TypeTag
        type={messageInfo.tagType}
        display={messageInfo.tagDisplay}
      />
    </div>
  );
};

export default ActivityMessage;
