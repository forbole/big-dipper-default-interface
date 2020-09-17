import { MockedProvider } from '@apollo/client/testing';

interface Iprops {
  mocks: any[];
  component: React.ReactElement;
}

export const WithMockApolloProvider = ({
  component, mocks = [],
}: Iprops) => {
  return (
    <MockedProvider
      mocks={mocks}
      addTypename={false}
    >
      {component}
    </MockedProvider>
  );
};
