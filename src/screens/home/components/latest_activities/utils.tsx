import {
  createStyles, makeStyles,
} from '@material-ui/styles';
import { formatMiddleEllipse } from '@utils';

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

const dummyHashValue = 'sdfkgsfgfgjlsglgsksddlk';

export const dummyLatestActivities:any = Array(10).fill({
  hash: {
    value: dummyHashValue,
    display: `#${formatMiddleEllipse(dummyHashValue, {
      beginning: 5,
      ending: 3,
    })}`,
  },
  timestamp: '10 Dec 2019 18:12',
  success: true,
  messages: [
    <div>one message</div>,
    <div>two message</div>,
  ],
});
