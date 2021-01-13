import { useRouter } from 'next/router';

export const useLatestActivitiesHook = () => {
  const router = useRouter();
  const handleClick = (hash:string | number) => {
    if (hash) {
      router.push(`/activities/${hash}`);
    }
  };

  return {
    handleClick,
  };
};
