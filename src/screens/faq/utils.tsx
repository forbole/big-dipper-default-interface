import { useTranslation } from 'i18n';

const Util = () => {
  const { t } = useTranslation('faq');
  const faq = [
    {
      question: t('question1'),
      ans: t('ans1'),
    },
    {
      question: t('question2'),
      ans: t('ans2'),
    },
    {
      question: t('question3'),
      ans: t('ans3'),
    },
    {
      question: t('question4'),
      ans: t('ans4'),
    },
    {
      question: t('question5'),
      ans: t('ans5'),
    },
    {
      question: t('question6'),
      ans: t('ans6'),
    },
  ];

  return (faq);
};

export default Util;
