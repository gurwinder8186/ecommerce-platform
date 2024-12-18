import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { addCategory, fetchCategories } from '../apis/productApi.ts'

export function  useCategories() {
  const query = useQuery({ queryKey: ['categories'], queryFn: () => fetchCategories(), });
  return {
    ...query,
  }
}

export function useAddCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:  (category: { name: string; description?: string }) => addCategory(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

}

