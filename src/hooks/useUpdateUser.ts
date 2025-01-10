import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GET_USERS, GET_USER } from '@/constants/query.ts';

const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (values: {
      value: {
        id: string;
        name: string;
        username: string;
        bio: string;
        profilePicture: string;
      }
    }) => {
      const response = await fetch(`${process.env.API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values.value),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_USERS, '']
      });
      queryClient.invalidateQueries({
        queryKey: [GET_USER, `${id}`]
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  })
};

export default useUpdateUser;