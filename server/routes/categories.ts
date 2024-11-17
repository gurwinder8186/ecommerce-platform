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





export default router
