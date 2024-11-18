import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addCategory,
  fetchCategories,
  deleteCategoryById,
  updateCategory,
} from '../apis/productApi.ts'
import { DesktopPC } from '../../models/Category.ts'

export function useCategories() {
  const query = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  })
  return {
    ...query,
  }
}

export function useAddCategory() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (category: { name: string; description?: string }) =>
      addCategory(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}

export function useDeleteCategory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteCategoryById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: (error) => {
      console.error('Error deleting category:', error)
    },
  })
}

export function useUpdateCategory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (category: {
      id: number
      name: string
      description?: string
    }) => updateCategory(category), 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] }) 
    },
    onError: (error) => {
      console.error('Failed to update category:', error) 
    },
  })
}



export function useFetchDesktopPCs(categoryId: number) {
  return useQuery<DesktopPC[]>(['products', categoryId], async () => {
    const response = await fetch(`/api/v1/products/category/${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  });
}
