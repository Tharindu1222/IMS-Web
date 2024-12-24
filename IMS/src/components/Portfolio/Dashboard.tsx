import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Project } from './types';

export default function PortfolioDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('http://localhost:3000/ims');
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch projects. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Portfolio Projects</h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded mb-4">
          {error}
        </div>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project._id} className="bg-white shadow-md rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.category}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              {Array.isArray(project.images) && project.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.startsWith('http') ? image : `http://localhost:3000/uploads/${image}`}
                      alt={`Project ${project.title} Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No images available</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
