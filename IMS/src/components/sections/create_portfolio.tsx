import React, { useState } from 'react';
import axios from 'axios';

const CreatePortfolio: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files)); // Convert FileList to an array
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('client', client);
    images.forEach((image) => formData.append('images', image));

    try {
      const response = await axios.post('/api/portfolio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Portfolio item created successfully');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to create portfolio');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Client:</label>
        <input
          type="text"
          value={client}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClient(e.target.value)}
        />
      </div>
      <div>
        <label>Images:</label>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          accept="image/*"
          required
        />
      </div>
      <button type="submit">Create Portfolio</button>
    </form>
  );
};

export default CreatePortfolio;
