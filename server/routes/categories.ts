import { Router } from 'express'

import * as db from '../db/categories.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCategories()

    res.json(categories)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})



router.post('/', async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const newCategory = await db.addCategory({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Category ID is required' });
  }

  try {
    const deletedCount = await db.deleteCategoryById(Number(id));

    if (deletedCount === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: `Category with ID ${id} deleted successfully` });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});



router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Category name is required' });
  }

  try {
    const updatedCategory = await db.updateCategoryById(Number(id), { name, description });
    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



export default router
