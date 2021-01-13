import {
  createStyles, makeStyles,
} from '@material-ui/styles';
import { LatestActivity } from '@models';
import { formatMiddleEllipse } from '@utils';
import moment from 'moment';

export const DummyContentMobile = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      wordBreak: 'break-word',
      '& .blue': {
        color: '#66a2de',
      },
      '& .bold': {
        fontWeight: 600,
      },
    },
  }));

  const classes = useStyles();
  const handleClick = (e:any) => {
    e.stopPropagation();
    console.log('child click');
  };
  return (
    <div className={classes.root}>
      <span className="blue" onClick={handleClick} role="button">
        Lori&nbsp;
      </span>
      delegate&nbsp;
      <span className="bold">1,000 ATOM</span>
      &nbsp;to&nbsp;
      <span className="blue">
        Forbole
      </span>
    </div>
  );
};

export const formatLatestActivitiesData = (data: LatestActivity[]) => {
  return data.map((x) => {
    return ({
      hash: {
        value: x.hash,
        display: `#${formatMiddleEllipse(x.hash, {
          beginning: 7,
          ending: 5,
        })}`,
      },
      timestamp: moment(x.timestamp).format('DD MMM YYYY, HH:mm'),
      success: x.success,
      messages: [
        <div>one message</div>,
        <div>two message</div>,
      ],
    });
  });
};
