import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import "../sections/Services.css";

interface ServiceItem {
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

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:5000/api/services')
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
                <div key={index} className="service-card">
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
