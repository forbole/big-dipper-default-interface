import {
  createStyles, makeStyles,
} from '@material-ui/styles';

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

export const dummyLatestActivitiesData:any[] = [
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    hash: '12344',
    time: '1 hour',
    success: true,
    content: <DummyContentMobile />,
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    hash: '12344',
    time: '1 hour',
    success: false,
    content: <DummyContentMobile />,
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    hash: '12344',
    time: '1 hour',
    success: true,
    content: <DummyContentMobile />,
  },
];

export const dummyLatestActivitiesDataDesktop = [
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
  },
];
