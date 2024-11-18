import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

import { addCategory, fetchCategories, deleteCategoryById, updateCategory } from '../apis/productApi.ts'

import { Category } from '../../models/Category.ts';


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


export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCategoryById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      console.error('Error deleting category:', error);
    },
  });
}



export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (category: { id: number; name: string; description?: string }) => updateCategory(category),  // Make sure to call updateCategory function here
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });  // Invalidate the categories query to refetch after update
    },
    onError: (error) => {
      console.error('Failed to update category:', error);  // Log error in case the update fails
    },
  });
}


