import { useRouter } from 'next/router';

export const useProposalListHook = () => {
  const router = useRouter();
  const handleClick = (data:any) => {
    if (typeof data?.title?.id === 'number') {
      router.push(`/proposals/${data.title.id}`);
    }
  };

  return {
    handleClick,
  };
};
