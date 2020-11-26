import { useRouter } from 'next/router';

export const useLatestActivitiesHook = () => {
  const router = useRouter();
  const handleClick = (data:any) => {
    if (data?.hash) {
      router.push(`/activities/${data.hash}`);
    }
  };

  return {
    handleClick,
  };
};
