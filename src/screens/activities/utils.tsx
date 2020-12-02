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
    time: '1 hour',
    success: false,
    content: <div>custom content</div>,
    hash: '12344566',
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: false,
    content: <div>custom content</div>,
    hash: '12344566',
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: false,
    content: <div>custom content</div>,
    hash: '12344566',
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
  },
  {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: false,
    content: <div>custom content</div>,
    hash: '12344566',
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
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
    collapsibleData: {
      height: <div>height</div>,
      fee: '123 uatm',
      gas: '1,234 / 20, 999',
      memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
    },
  },
];

export const getCollapsibleLabels = (t:any) => {
  return ({
    hash: t('hash'),
    height: t('height'),
    fee: t('fee'),
    gas: t('gas'),
    status: t('status'),
    memo: t('memo'),
  });
};

export const getFilterLabels = () => {
  return ([
    {
      key: 'none',
      display: 'none',
    },
    {
      key: 'transfer',
      display: 'transfer',
    },
    {
      key: 'staking',
      display: 'staking',
    },
    {
      key: 'distribution',
      display: 'distribution',
    },
    {
      key: 'governance',
      display: 'governance',
    },
    {
      key: 'slashing',
      display: 'slashing',
    },
  ]);
};
