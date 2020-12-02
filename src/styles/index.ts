import {
  darkTheme, lightTheme,
} from './theme';
import {
  getMaxMediaQuery, getMinMediaQuery,
} from './utils';
import { useLatestBlocksDesktopStyles } from './latest_blocks_desktop';
import { useMobileOnlyStyles } from './mobile_only';
import { useDesktopOnlyStyles } from './desktop_only';
import { useLatestBlocksMobileStyles } from './latest_blocks_mobile';
import { useTablePreviewWrapperStyles } from './table_preview_wrapper';
import { useLatestActivitiesMobileStyles } from './latest_activities_mobile';
import { useLatestActivitiesDesktopStyles } from './latest_activities_desktop';

export {
  darkTheme,
  lightTheme,
  getMinMediaQuery,
  getMaxMediaQuery,
  useLatestBlocksDesktopStyles,
  useLatestBlocksMobileStyles,
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useTablePreviewWrapperStyles,
  useLatestActivitiesMobileStyles,
  useLatestActivitiesDesktopStyles,
};
