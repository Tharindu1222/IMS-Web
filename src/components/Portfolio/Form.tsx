import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/create-portfolio');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !desc || !category || !image.length) {
      setMessage({ type: 'error', text: 'All fields are required.' });
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('category', category);
    image.forEach((img, index) => {
      formData.append('image', img, `image-${index}`);
    });

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/services', formData, {
        headers: { 'Authorization': localStorage.getItem('token') }
      });

      if (response.data.code === 403 && response.data.message === 'Token Expired') {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        setMessage({ type: 'success', text: 'Project added successfully!' });
        // Reset form
        setTitle('');
        setDesc('');
        setCategory('');
        setImage([]);
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add project. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Add New Portfolio Project</h2>
        <p className="subtitle">Create a new Project by filling out the form below.</p>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter service title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter service description"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Lectures & Trainings">Lectures & Trainings</option>
            <option value="Paint Inspection">Paint Inspection</option>
            <option value="Major Projects">Major Projects</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="images">Images</label>
          <div className="file-input">
            <input
              id="images"
              type="file"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setImage(Array.from(e.target.files));
                }
              }}
            />
            {image.length > 0 && (
              <span className="file-count">
                {image.length} {image.length === 1 ? 'file' : 'files'} selected
              </span>
            )}
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Adding Project...' : 'Add Project'}
        </button>
      </form>
    </div>
  );
}

export default App;