import { useTranslation } from 'i18n';
/**
 * Helper hook to fetch activity collapsible labels across the app
 */
export const useActivityLabelsHook = () => {
  const { t } = useTranslation('activities');
  const collapsibleLabels = {
    hash: t('hash'),
    height: t('height'),
    fee: t('fee'),
    gas: t('gas'),
    status: t('status'),
    memo: t('memo'),
  };

  return {
    collapsibleLabels,
  };
};
