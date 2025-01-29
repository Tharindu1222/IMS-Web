import axios from "axios";
import { useEffect, useState } from "react";
import "./Services.css";

interface ServiceItem {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface ServicesProps {
  hideSearchBar?: boolean;
}

function Services(props: ServicesProps) {
  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

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

  return (
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
  );
}

export default Services;
