import { useQuery } from '@tanstack/react-query';
import { GET_USER } from '@/constants/query.ts';

const useQueryUser = (id: string) => {
  return useQuery({
      queryKey: [GET_USER, id],
      queryFn: async () => {
        const response = await fetch(`${process.env.API_URL}/users/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        return await response.json();
      }
    },
  );
};

export default useQueryUser;