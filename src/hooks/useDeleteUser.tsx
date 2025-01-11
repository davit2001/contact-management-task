import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { GET_USER, GET_USERS } from '@/constants/query.ts';

const useDeleteUser = (id: number) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate({ from: '/users/$userId' })

  const searchParams: {
    name?: string;
  } = useSearch({
    strict: false,
  });
  const searchName = searchParams?.name || '';

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
        queryKey: [GET_USERS, searchName]
      });
      queryClient.invalidateQueries({
        queryKey: [GET_USER, `${id}`]
      });
      navigate({ to: '/', search: { name: searchName }});
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  })
};

export default useDeleteUser;