const getFaqDetails = () => {
  const faq = [
    {
      topic: 'blockchain',
      questions: [
        {
          question: 'posQuestion',
          ans: 'posAnswer',
        },
        {
          question: 'inflationQuestion',
          ans: 'inflatinAnswer',
        },
      ],
    },
    {
      topic: 'delegators',
      questions: [
        {
          question: 'delegatorsQuestion',
          ans: 'delegatorsAnswer',
        },
        {
          question: 'stakingQuestion',
          ans: 'stakingAnswer',
        },
        {
          question: 'stakingActionsQuestion',
          ans: 'stakingActionsAnswer',
        },
        {
          question: 'bondingQuestion',
          ans: 'bondingAnswer',
        },
      ],
    },
    {
      topic: 'validators',
      questions: [
        {
          question: 'validatorsQuestion',
          ans: 'validatorsAnswer',
        },
        {
          question: 'validatorsEeigibilityQuestion',
          ans: 'validatorsEeigibilityAnswer',
        },
        {
          question: 'chooseValidatorQuestion',
          ans: 'chooseValidatorAnswer',
        },
      ],
    },
    {
      topic: 'governance',
      questions: [
        {
          question: 'proposalsQuestion',
          ans: 'proposalsAnswer',
        },
        {
          question: 'votingPowerQuestion',
          ans: 'votingPowerAnswer',
        },
        {
          question: 'votingQuestion',
          ans: 'votingAnswer',
        },
      ],
    },
  ];

  return faq;
};

export default getFaqDetails;
