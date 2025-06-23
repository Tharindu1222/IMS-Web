import axios from "axios";
import { useEffect, useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";

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

  return (
    <div id="projects" className="w-full">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Portfolio
        </motion.h1>
        
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          Our Projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>
      
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
   {serviceItem.title}
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
  );
}

export default Services;
