import React, { useState } from 'react';
import { DesktopPC } from '../../models/DesktopPC';

interface DesktopPCFormProps {
  onSubmit: (desktopPC: DesktopPC) => void;
  initialData?: Partial<DesktopPC>; // For pre-filling in case of editing
}

function validateDesktopPC(data: Partial<DesktopPC>): boolean {
  return (
    !!data.name &&
    !!data.description &&
    data.price > 0 &&
    !!data.imageUrl &&
    !!data.specifications?.processor &&
    !!data.specifications?.ram &&
    !!data.specifications?.storage &&
    !!data.specifications?.os
  );
}

const DesktopPCForm: React.FC<DesktopPCFormProps> = ({ onSubmit, initialData = {} }) => {
  const [desktopPC, setDesktopPC] = useState<Partial<DesktopPC>>(initialData);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    if (name.includes('specifications.')) {
      const key = name.split('.')[1];
      setDesktopPC((prev) => ({
        ...prev,
        specifications: { ...prev.specifications, [key]: value },
      }));
    } else {
      setDesktopPC((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateDesktopPC(desktopPC)) {
      setError('Please fill out all required fields.');
      return;
    }

    setError(null);
    onSubmit(desktopPC as DesktopPC); // Cast because validation ensures it's complete
  }

  return (
    <div>
      <h3>{initialData.id ? 'Edit Desktop PC' : 'Add Desktop PC'}</h3>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={desktopPC.name || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={desktopPC.description || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={desktopPC.price || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={desktopPC.imageUrl || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <h4>Specifications</h4>
        <div>
          <label>
            Processor:
            <input
              type="text"
              name="specifications.processor"
              value={desktopPC.specifications?.processor || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            RAM:
            <input
              type="text"
              name="specifications.ram"
              value={desktopPC.specifications?.ram || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Storage:
            <input
              type="text"
              name="specifications.storage"
              value={desktopPC.specifications?.storage || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Operating System:
            <input
              type="text"
              name="specifications.os"
              value={desktopPC.specifications?.os || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">{initialData.id ? 'Update' : 'Add'} Desktop PC</button>
      </form>
    </div>
  );
};

export default DesktopPCForm;
