import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { addCategory, fetchCategories } from '../apis/productApi.ts'

export function  useCategories() {
  const query = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
  return {
    ...query,
  }
}

export function useAddCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

}

