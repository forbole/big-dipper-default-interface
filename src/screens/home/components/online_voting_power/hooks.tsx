import { useTheme } from '@material-ui/core/styles';

export const useOnlineVotingPowerHook = () => {
  const theme:any = useTheme();

  const getCartesianGridStroke = () => {
    return theme?.palette?.divider;
  };

  return {
    getCartesianGridStroke,
  };
};
