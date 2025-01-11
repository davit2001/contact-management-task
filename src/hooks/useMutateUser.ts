import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GET_USERS, GET_USER } from '@/constants/query.ts';
import { useSearch } from '@tanstack/react-router';

const useMutateUser = (id?: string) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const searchParams: {
    name?: string;
  } = useSearch({
    strict: false,
  });
  const searchName = searchParams?.name || '';

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
      let response;
      if (id) {
        response = await fetch(`${process.env.API_URL}/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values.value),
        })
      } else {
        response = await fetch(`${process.env.API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values.value,
            id: Math.random().toString(36).substring(7),
          }),
        })
      }
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_USERS, searchName]
      });
      queryClient.invalidateQueries({
        queryKey: [GET_USER, `${id}`]
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: 'error' });
    },
  })
};

export default useMutateUser;