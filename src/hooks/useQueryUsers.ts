import { useQuery } from '@tanstack/react-query';
import { useSearch } from '@tanstack/react-router';
import { GET_USERS } from '@/constants/query.ts';

const useQueryUsers = () => {
  const searchParams: {
    name?: string;
  } = useSearch({
    strict: false,
  });
  const searchName = searchParams?.name || '';

  return useQuery({
      queryKey: [GET_USERS, searchName],
      queryFn: async () => {
        const response = await fetch(`${process.env.API_URL}/users?q=${searchName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        return await response.json();
      }
    },
  );
};

export default useQueryUsers;