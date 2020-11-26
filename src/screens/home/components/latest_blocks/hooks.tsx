import { useRouter } from 'next/router';

export const useLatestBlocksHook = () => {
  const router = useRouter();
  const handleClick = (data:any) => {
    if (typeof data?.height?.value === 'number') {
      router.push(`/blocks/${data.height.value}`);
    }
  };

  return {
    handleClick,
  };
};
