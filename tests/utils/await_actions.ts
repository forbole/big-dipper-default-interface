import { act } from 'react-dom/test-utils';

export const awaitActions = async ({ time = 0, wrapper }) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, time));
    wrapper.update();
  });
};
