import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GET_USER, GET_USERS } from '@/constants/query.ts';
import { useRouter } from '@tanstack/react-router';

const useDeleteUser = (id: number) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('An error occurred while deleting the user');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_USERS, '']
      });
      queryClient.invalidateQueries({
        queryKey: [GET_USER, `${id}`]
      });
      router.history.replace('/');
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  })
};

export default useDeleteUser;