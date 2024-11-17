import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { fetchCategories } from '../apis/productApi.ts'

export function  useCategories() {
  const query = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
  return {
    ...query,
  }
}

export function useCategoriesMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return mutation;
}

