import { act } from 'react-dom/test-utils';

export const awaitActions = async ({
  time = 5, wrapper,
}: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, time));
    if (wrapper) {
      wrapper.update();
    }
  });
};
