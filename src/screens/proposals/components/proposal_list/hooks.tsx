import { useRouter } from 'next/router';

export const useProposalListHook = () => {
  const router = useRouter();

  const handleClick = (data:any) => {
    router.push(`/proposals/${data.id}`);
  };

  return {
    handleClick,
  };
};
