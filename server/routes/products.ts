import { Router } from 'express';
import * as db from '../db/products';
import { DesktopPC } from '../../models/Category';

const router = Router();

router.post('/', async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.category_id) {
    return res.status(400).json({ error: 'Name, price, and category_id are required' });
  }

  try {
    const newProduct = await db.addProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

router.get('/category/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const products: DesktopPC[] = await db.getProductsByCategory(Number(id));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export default router;
