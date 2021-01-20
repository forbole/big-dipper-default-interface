import { LatestActivity } from '@models';

export interface ActivitiesListProps {
  data: LatestActivity[];
  onClick?: (hash: string | number) => void;
}
