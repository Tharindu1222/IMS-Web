import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import "../sections/Services.css";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface ServicesProps {
  hideSearchBar?: boolean;
}


function App(props: ServicesProps) {

  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/api/services`)
      .then(res => {
        setServicesData(res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/create-portfolio');
    }
  }, [navigate]);

  const handleEdit = (service: ServiceItem) => {
    setEditId(service._id || null);
    setTitle(service.title);
    setDesc(service.description);
    setCategory(service.category);
    setImage([]); // Images must be re-uploaded if changed
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/services/${id}`, {
        headers: { 'Authorization': localStorage.getItem('token') }
      });
      setServicesData(prev => prev.filter(item => item._id !== id));
      setMessage({ type: 'success', text: 'Project deleted successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete project. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc || !category || (!image.length && !editId)) {
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
      if (editId) {
        // Update project
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/services/${editId}`, formData, {
          headers: { 'Authorization': localStorage.getItem('token') }
        });
        if (response.data.code === 403 && response.data.message === 'Token Expired') {
          localStorage.removeItem('token');
          navigate('/');
        } else {
          setMessage({ type: 'success', text: 'Project updated successfully!' });
          setEditId(null);
          setTitle('');
          setDesc('');
          setCategory('');
          setImage([]);
          // Refresh list
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
          setServicesData(res.data.data);
        }
      } else {
        // Add new project
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/services`, formData, {
          headers: { 'Authorization': localStorage.getItem('token') }
        });
        if (response.data.code === 403 && response.data.message === 'Token Expired') {
          localStorage.removeItem('token');
          navigate('/');
        } else {
          setMessage({ type: 'success', text: 'Project added successfully!' });
          setTitle('');
          setDesc('');
          setCategory('');
          setImage([]);
          // Refresh list
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
          setServicesData(res.data.data);
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: editId ? 'Failed to update project. Please try again.' : 'Failed to add project. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setTitle('');
    setDesc('');
    setCategory('');
    setImage([]);
    setMessage({ type: '', text: '' });
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
          {loading ? (editId ? 'Updating Project...' : 'Adding Project...') : (editId ? 'Update Project' : 'Add Project')}
        </button>
        {editId && (
          <button type="button" className="cancel-btn" onClick={handleCancelEdit} disabled={loading}>
            Cancel Edit
          </button>
        )}
      </form>
 
    <div className="services-container">
      {!props.hideSearchBar && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search services..."
            className="search-input"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      )}

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading services...</p>
        </div>
      ) : (
        <div className="services-grid">
          {servicesData && servicesData.length > 0 ? (
            servicesData
              .sort((a, b) => a.title.localeCompare(b.title))
              .filter(item => 
                item.title.toLowerCase().includes(filter.toLowerCase()) ||
                item.description.toLowerCase().includes(filter.toLowerCase())
              )
              .map((serviceItem, index) => (
                <div key={serviceItem._id || index} className="service-card">
                  <div className="service-image">
                    <img 
                      src={`http://localhost:5000/${serviceItem.imageUrl}`}
                      alt={serviceItem.title}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <strong>Title:</strong> {serviceItem.title}
                    </h3>
                    <p className="service-description">
                      <strong>Description:</strong> {serviceItem.description}
                    </p>
                    <div className="service-footer">
                      <span className="service-category">
                        <strong>Category:</strong> {serviceItem.category}
                      </span>
                    </div>
                    <div className="service-actions">
                      <button className="edit-btn" onClick={() => handleEdit(serviceItem)} disabled={loading}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(serviceItem._id)} disabled={loading}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="no-data">No Projects found</div>
          )}
        </div>
      )}
    </div>
  </div>
  );}

export default App;
